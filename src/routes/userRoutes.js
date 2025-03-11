import UserController from "../controllers/userController.js";
import EventController from "../controllers/eventController.js";
import express from "express";

function routes(app){
    app.use(express.json()); 
    
    app.delete("/:userId/:eventId", EventController.deleteEvent);

    app.post("/register", UserController.registerUser);
    app.post("/login", UserController.loginUser);
    app.post("/:userId/evento", EventController.registerEvent);


}

export default routes;