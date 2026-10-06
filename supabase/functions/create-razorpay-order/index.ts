// Deploy as a Supabase Edge Function. Keep Razorpay secret on the server.
import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';

serve(async (req) => {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });
  const { amount, receipt } = await req.json();
  const keyId = Deno.env.get('RAZORPAY_KEY_ID');
  const keySecret = Deno.env.get('RAZORPAY_KEY_SECRET');
  if (!keyId || !keySecret) return Response.json({ error: 'Razorpay server credentials are not configured.' }, { status: 500 });
  const auth = btoa(`${keyId}:${keySecret}`);
  const response = await fetch('https://api.razorpay.com/v1/orders', {
    method: 'POST', headers: { Authorization: `Basic ${auth}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: Math.round(Number(amount) * 100), currency: 'INR', receipt })
  });
  const data = await response.json();
  return Response.json(data, { status: response.status });
});
