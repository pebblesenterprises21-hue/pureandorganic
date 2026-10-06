// Verify the Razorpay signature server-side before marking an order paid.
import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';

async function hmacSha256(secret: string, message: string) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message));
  return [...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, '0')).join('');
}
serve(async (req) => {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();
  const secret = Deno.env.get('RAZORPAY_KEY_SECRET');
  if (!secret) return Response.json({ verified: false, error: 'Server secret not configured.' }, { status: 500 });
  const expected = await hmacSha256(secret, `${razorpay_order_id}|${razorpay_payment_id}`);
  return Response.json({ verified: expected === razorpay_signature });
});
