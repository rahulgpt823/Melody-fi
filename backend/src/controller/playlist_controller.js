import PlaylistModel from "../model/playlist_model.js";
import { Types } from "mongoose";
import passport from "passport";



export const getAPlaylist = async (req, res) => {
  const playlistId = req.params.playlistId;

  const playlist = await PlaylistModel.findOne({ _id: playlistId });
  if (!playlist) {
    return res.status(403).json("playlist not present");
  }
  res.status(200).json(playlist);
};

export const getAllPlaylist = async (req, res) => {
  // To return all the song .
  //Need to validate the user before user can access the file
  const song = await SongModel.find({});
  if (!song.length) {
    return res
      .status(403)
      .json("No Songs Found. Waiting for Songs to get upload");
  }
  console.log("List of songs has been generated.");
  res.status(200).json(song);
};


//POST request
export const createAPlaylist = async (req, res) => {
  // post request
const currentUser =req.user;
  // Array to store the names of missing fields
  const missingFields = [];

  const { playlistTitle, songList,thumbnail, } = req.body;
  if (!playlistTitle) {
    missingFields.push("playlistTitle");
  }
  if (!songlist) {
    missingFields.push("track");
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
    playlistTitle,
    thumbnail,
    createdBy:req.user._id,
    meta:{
        songlist:[]
    },

  }
  const playlist = await playlist.create({ playlistData});
  if (!playlist) {
    return res.status(403).json("platylist not present");
  }
  res.status(200).json(playlist);

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


//Add a song ot a playlist

