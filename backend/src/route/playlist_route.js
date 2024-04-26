/**
 * Route for CRUD operation on the song model
 *
 */

import express,{ Router } from "express";
import passport from 'passport';
import * as  songController  from "../controller/song_controller.js";
const playlistRouter = new Router();

playlistRouter.post("/",passport.authenticate('jwt',{session:false}) ,playlistController.createAPlaylist);
playlistRouter.get("/", playlistController.getAllPlaylist);
playlistRouter.get("/:playlistId", playlistController.getAPlaylist);
playlistRouter.put("/:playlistId", playlistController.updateAPlaylist);
playlistRouter.put("/:playlistId", playlistController.updateAllPlaylist);
playlistRouter.delete("/global", playlistController.deleteAllPlaylist);
playlistRouter.delete("/:playlistId", playlistController.deleteAPlaylist);

export default playlistRouter;
