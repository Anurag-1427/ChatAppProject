import express from "express";
import {
  addMembers,
  deleteChat,
  getChatDetails,
  getMessages,
  getMyChats,
  getMyGroups,
  leaveGroup,
  newGroupChat,
  removeMembers,
  renameGroup,
  sendAttachments,
} from "../controllers/chat.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { attachmentMulter } from "../middlewares/multer.js";

const app = express.Router();

// After here user must be logged in to access the routes
app.use(isAuthenticated);
app.post("/new", newGroupChat);
app.get("/my", getMyChats);
app.get("/my/groups", getMyGroups);
app.put("/addmembers", addMembers);
app.put("/removemember", removeMembers);
app.delete("/leave/:id", leaveGroup);

// Send attachment
app.post("/message", attachmentMulter, sendAttachments);

// Get Messages
app.get("/message/:id", getMessages);

// Send Chat Details, rename, delete
app.route("/:id").get(getChatDetails).put(renameGroup).delete(deleteChat);

export default app;
