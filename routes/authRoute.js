import express from "express";
import {
  forgotPasswordController,
  getAllOrdersController,
  getBookingController,
  loginController,
  orderStatusController,
  registerController,
  testController,
  updateProfileController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { get } from "mongoose";
//route object
const router = express.Router();

//routing
//Register || Method POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//Forgot password || post
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected user route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//booking
router.get("/bookings", requireSignIn, getBookingController);

// all Booking
router.get("/all-bookings", requireSignIn, isAdmin, getAllOrdersController);

//orders status update
router.put(
  "/booking-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
