import { Schema, Types, model, models } from "mongoose";

const schema = new Schema(
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
      type: Types.ObjectId,
      ref: "User",
      requried: true,
    },
    chat: {
      type: Types.ObjectId,
      ref: "Chat",
      requried: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Message = models.Message || model("Message", schema);
