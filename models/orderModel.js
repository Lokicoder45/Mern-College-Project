import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    cars: [
      {
        type: mongoose.ObjectId,
        ref: "cars",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "Not Process",
      enum: ["Not Process", "Processing", "Booked", "Taking", "cancel"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
