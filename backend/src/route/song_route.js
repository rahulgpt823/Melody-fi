/**
 * Route for CRUD operation on the song model
 *
 */

import { Router } from "express";
import passport from 'passport';
import * as  songController  from "../controller/song_controller.js";
const songRouter = new Router();

songRouter.post("/",passport.authenticate("jwt",{session:false}), songController.uploadASong);
songRouter.get("/", songController.getAllSong);
songRouter.get("/:songId", songController.getASong);
songRouter.put("/:songId", songController.updateASong);
songRouter.delete("/global", songController.deleteAllSong);
songRouter.delete("/:songId", songController.deleteASong);

export default songRouter;
