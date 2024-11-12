import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    content: String,
    attachments: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    sender: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      requried: true,
    },
    chat: {
      type: mongoose.Types.ObjectId,
      ref: "Chat",
      requried: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Message =
  mongoose.models.Message || mongoose.model("Message", schema);
