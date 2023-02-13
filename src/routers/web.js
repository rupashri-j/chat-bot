import express from 'express';
let router = express.Router();

import homepageController from "../controllers/homepage-controllers";

let initWebRoutes = (app)=>{
    router.get("/", homepageController.getHomepage);
    
    return app.use("/", router);
}

module.exports = initWebRoutes;