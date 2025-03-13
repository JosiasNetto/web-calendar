import UserController from "../controllers/userController.js";
import EventController from "../controllers/eventController.js";
import express from "express";
import cors from "cors";
import authMidleware from "../controllers/tokenController.js";

function routes(app){
    app.use(express.json()); 
    app.use(cors()); 
    
    app.delete("/user/eventos/:eventId",authMidleware, EventController.deleteEvent);

    app.post("/cadastro", UserController.registerUser);
    app.post("/login", UserController.loginUser);
    app.post("/user/evento",authMidleware, EventController.registerEvent);

    app.get("/user/eventos", authMidleware, EventController.listEventsUser);

    app.put("/eventos/:eventId", EventController.updateEvent);
}

export default routes;