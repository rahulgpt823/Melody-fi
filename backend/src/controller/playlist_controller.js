
import PlaylistModel, { PlaylistSchema } from "../model/playlist_model.js";
import UserModel from "../model/user_model.js";
import passport from "passport";
import express from 'express';
import mongoose,{Types} from 'mongoose';

import SongModel,{SongSchema} from "../model/song_model.js";




export const getAPlaylist = async (req, res) => {
  const playlistId = req.params.playlistId;

  const playlist = await PlaylistModel.findOne({ _id: playlistId });
  if (!playlist) {
    return res.status(403).json("playlist not present");
  }
  res.status(200).json(playlist);
};

export const getAllPlaylist = async (req, res) => {
  // To return all the playlist .
  //Need to validate the user before user can access the file
  const playlist = await PlaylistModel.find({});
  if (!playlist.length) {
    return res
      .status(403)
      .json("No playlist Found. Waiting for playlist to get created");
  }
  console.log("List of Playlist has been generated.");
  res.status(200).json(playlist);
};


//POST request
export const createAPlaylist = async (req, res) => {
  // post request
//const currentUser =req.user;
  // Array to store the names of missing fields
  const missingFields = [];

  const { playlistTitle, createdBy, thumbnail, likes, totalSong, meta} = req.body;
  if (!playlistTitle) {
    missingFields.push("playlistTitle");
  }
  if (!createdBy) {
    missingFields.push("createdBy");
  }

  if (!thumbnail) {
    missingFields.push("thumbnail");
  }

  if (missingFields.length > 0) {
    return res
      .status(400)
      .json({ error: `Missing required fields,check payload : ${missingFields}` });
  }

  /**
  
   */

  const playlistData = {
    playlistTitle:playlistTitle,
    thumbnail:thumbnail,
    createdBy:createdBy, //req.user._id,
    likes:likes,
    totalSong:totalSong,
    meta:meta,

  };
  try{
  const playlist = await PlaylistModel.create(playlistData);
  res.status(200).json(playlist);
  }catch(error){
    console.error("Error creating playlist:", error);
    res.status(500).json({ error: "Internal server error" });
  }
 

}

export const deleteAPlaylist = async (req, res) => {
  const toDeletePlaylist = req.params.playlistId;
  const playlist = await PlaylistModel.deleteOne({ _id: toDeletePlaylist });
  if (!playlist) {
    return res.status(403).json("Playlist not present or already deleted");
  }
  
  res.status(200).json(playlist);
};

export const deleteAllPlaylist = async (req, res) => {
  // To return all the song .
  //Need to validate the user before user can access the file
 
  const playlist = await PlaylistModel.deleteMany({});
  if (!playlist.length) {
    return res
      .status(403)
      .json("No Songs Found. Waiting for Songs to get upload");
  }
  console.log("List of playlists has been generated.");
  res.status(200).json(playlist);
};

export const updateAPlaylist = async(req,res)=>{


 const songId= req.params.songId;


    /**
     * Model.updateOne(filter, update, options, callback )
     * const filter ={}
     * const update = {
    $set:{
      field:value
    }}
     */
  
    const {playlistTitle,track,artist,thumbnail,meta} = req.body;
    try{
    const updatedSong = await SongModel.updateOne({_id:songId},{$set:{playlistTitle,track,artist,thumbnail,meta}});

    if(updatedSong.modifiedCount>0){
      res.status(200).json({message:"song updated successfully"})
    }
    else{
      res.status(404).json({message:"song not found or no update has happened"})
    }
  }
  catch(error){
    console.error("Error updating song:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
  }


//Get all playlist made by an artist 
export const playlistByArtist = async (req, res) => {
  try {
      const artistId = req.params.userId;

      // Validate if the artist is present or not
      const checkArtistExist = await UserModel.findOne({ _id: new mongoose.Types.ObjectId(artistId) });
      if (!checkArtistExist) {
          console.log("Artist not present. Kindly check if you are signed up.");
          return res.status(404).json({ message: "Artist not found" });
      }

      const artistPlaylists = await PlaylistModel.find({ createdBy: artistId });
      if (!artistPlaylists.length) {
          return res.status(403).json({ message: `No playlists found for artist with ID: ${artistId}` });
      }

      console.log("List of all playlists has been generated.");
      res.status(200).json(artistPlaylists);
  } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({ error: error.message });
  }
};
                                                                                                                                                                                                                                                                        
  

//Add a song to  a playlist



export const addSongToPlaylist = async (req, res) => {
  try {
  const{playlistId, songIds} = req.body;
    
      // Convert playlistId and songIds to ObjectId
      const playlistObjectId = new Types.ObjectId(playlistId);
      const songObjectIds = songIds.map(songId =>  new Types.ObjectId(songId));

      // Find the playlist
      const playlist = await PlaylistModel.findOne({ _id: playlistObjectId });
      if (!playlist) {
          console.log("Playlist not found");
          return;
      }

      // Check if the songs are valid
      const invalidSongs = [];
      for (const songId of songObjectIds) {
          const exists = await SongModel.exists({ _id: songId });
          if (!exists) {
              invalidSongs.push(songId);
          }
      }

      // If any invalid songs are found, return an error
      if (invalidSongs.length > 0) {
          console.log(`The following songs are not found: ${invalidSongs.join(", ")}`);
          
      }

      // Filter out the song IDs that are already in the playlist
      const newSongIds = songObjectIds.filter(songId => !playlist.meta.songList.includes(songId));
      // If no new songs to add, return a message
      if (newSongIds.length === 0) {
          console.log("All songs are already in the playlist");
          return res.status(200).json({message: "song already added to  playlist"});
      }

            // Check if thumbnail is set; if not, set a default or ensure your playlist creation logic handles it
            if (!playlist.thumbnail) {
              playlist.thumbnail = "default_thumbnail.jpg"; // Set a default thumbnail if none provided
          }

      // Add the new song IDs to the playlist's songList
      playlist.meta.songList.push(...newSongIds);
      await playlist.save();

      console.log(`Songs ${newSongIds.join(", ")} have been added to the playlist`);
      res.status(200).json({message:"Songs has been added to playlist"})
  } catch (error) {
      console.error("Error:", error.message);
  }
};
     
        

