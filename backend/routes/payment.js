import express from "express";
const router = express.Router();
import { isAuthenticatedUser } from "../middlewares/auth.js";
import {
  processPayment,
  sendStripeApi,
} from "../controllers/paymentController.js";

router.route("/payment/process").post(isAuthenticatedUser, processPayment);
router.route("/stripeapi").get(isAuthenticatedUser, sendStripeApi);

export default router;
