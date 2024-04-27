/**
 * Route for CRUD operation on the song model
 *
 */

import express,{ Router } from "express";
import passport from 'passport';
import * as  playlistController from "../controller/playlist_controller.js";
 const playlistRouter = new Router();

playlistRouter.post("/" ,playlistController.createAPlaylist);
playlistRouter.get("/", playlistController.getAllPlaylist);
playlistRouter.get("/:playlistId", playlistController.getAPlaylist);
playlistRouter.put("/:playlistId", playlistController.updateAPlaylist);
//playlistRouter.put("/:playlistId", playlistController.updateAllPlaylist);
playlistRouter.delete("/global", playlistController.deleteAllPlaylist);
playlistRouter.delete("/:playlistId", playlistController.deleteAPlaylist);

//Custom Routes
playlistRouter.get("/artist/:userId", playlistController.playlistByArtist);
playlistRouter.post("/song", playlistController.addSongToPlaylist);
export default playlistRouter;
