import { Schema, model, models } from "mongoose";

const schema = new Schema(
  {
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "accepted", "rejected"],
    },

    sender: {
      type: Types.ObjectId,
      ref: "User",
      requried: true,
    },
    receiver: {
      type: Types.ObjectId,
      ref: "User",
      requried: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Request = models.Request || model("Request", schema);
