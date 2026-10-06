# Pure & Organic — pureandorganic.shop

React + Vite storefront designed for GitHub Pages, with Supabase for data and Supabase Edge Functions for Razorpay server-side operations.

## 1. Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

## 2. Supabase

Create a Supabase project and run `supabase/schema.sql` in the SQL editor. Then add your URL and anon key to `.env.local`.

The current UI ships with demo products in `src/lib/products.js`. Next, replace that fallback with `fetchProducts()` and map Supabase fields to the product card fields.

## 3. Razorpay

Never put `RAZORPAY_KEY_SECRET` in Vite/browser code. Set these secrets in Supabase Edge Functions:

- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`

Deploy the two functions in `supabase/functions/` and update `VITE_PAYMENT_FUNCTION_URL`.

The checkout UI currently stops safely at a demo status until the backend function is connected. This prevents accidental live payment attempts.

## 4. GitHub Pages

For a Vite site, configure the GitHub Pages workflow to run `npm ci`, `npm run build`, and publish `dist/`. Set the Vite base to `/repository-name/` if using the default `github.io/repository-name` URL. For the custom domain `pureandorganic.shop`, use `/` and add the domain in GitHub Pages settings.

## 5. Production checklist

- Add real products and product images in Supabase Storage.
- Add admin authentication and protected admin routes.
- Add server-side order creation and payment verification.
- Add Razorpay webhook handling for payment status reconciliation.
- Add shipping/returns/privacy/terms pages.
- Configure custom domain DNS and HTTPS.
- Test payments in Razorpay test mode before going live.
