import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "accepted", "rejected"],
    },

    sender: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      requried: true,
    },
    receiver: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      requried: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Request =
  mongoose.models.Request || mongoose.model("Request", schema);
