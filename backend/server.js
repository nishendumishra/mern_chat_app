
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";


import connectToMongoDb from "./db/connectToMongoDb.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();
app.use(express.json());
app.use(cookieParser());
// this will allow us to parse the incoming requests with the json payloads
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

// app.get("/", (req, res) => {
//     // root route http://localhost:5000/
//     res.send("Hello World!!");
// });

// app.get("/api/auth/signup", (req, res) => {
//     console.log("signup route");
// });

// app.get("/api/auth/login", (req, res) => {
//     console.log("login route");
// });

// app.get("/api/auth/logout", (req, res) => {
//     console.log("logout route");
// });

// instead of using these statements we will use middlewares


server.listen(PORT, () => {
    connectToMongoDb();
    console.log(`Server running on port ${PORT}`) 
});