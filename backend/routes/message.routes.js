import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getMessages, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

// this id will get messages
router.get("/:id", protectRoute, getMessages);
// this is the id of the person who is trying to send the message
router.post("/send/:id", protectRoute, sendMessage);

export default router;