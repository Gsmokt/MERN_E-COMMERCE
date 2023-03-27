import { asyncMiddleware } from "../middlewares/catchAsyncErrors.js";
import dotenv from "dotenv";
dotenv.config({ path: "backend/config/config.env" });
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Process tripe payments
export const processPayment = asyncMiddleware(async (req, res, next) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "usd",
    metadata: { integration_check: "accept_a_payment" },
  });
  res.status(200).json({
    success: true,
    client_secret: paymentIntent.client_secret,
  });
});

// Send stripe API Key
export const sendStripeApi = asyncMiddleware(async (req, res, next) => {
  res.status(200).json({
    stripeApiKey: process.env.STRIPE_API_KEY,
  });
});
