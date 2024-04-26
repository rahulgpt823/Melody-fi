import { SongModel, SongSchema } from "../model/song_model.js";
import { Types } from "mongoose";

export const getASong = async (req, res) => {
  const songid = req.params.songId;

  const song = await SongModel.findOne({ _id: songid });
  if (!song) {
    return res.status(403).json("Song not present");
  }
  res.status(200).json(song);
};

export const getAllSong = async (req, res) => {
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
export const uploadASong = async (req, res) => {
  // post request

  // Array to store the names of missing fields
  const missingFields = [];

  const { songTitle, track, artist, thumbnail, meta } = req.body;
  if (!songTitle) {
    missingFields.push("songTitle");
  }
  if (!track) {
    missingFields.push("track");
  }
  if (!artist) {
    missingFields.push("artist");
  }
  if (!thumbnail) {
    missingFields.push("thumbnail");
  }

  if (missingFields.length > 0) {
    return res
      .status(400)
      .json({ error: `Missing required fields,check payload : ${missingFields}` });
  }
const currentUser =req.user;
  /**
   * Now we will add the document to the song collection using create method due to below reasons
   * Ease of use,Convineance as it accepts single argument that is your payload
   * Doesnt need to create an instance of mongoose(save 3x memory)
   * automatically adheres to the mongoose built -in validation logic,ensuring that the data being saved adheres to the schema definition.
   * supports array so multiple document can be inserted in a single operation
   */
  const song = await SongModel.create({ songTitle, track, artist, thumbnail, meta });
  if (!song) {
    return res.status(403).json("Song not present");
  }
  res.status(200).json(req.user.song);
};


export const deleteASong = async (req, res) => {
  const toDeleteSong = req.params.songId;
  const song = await SongModel.deleteOne({ _id: toDeleteSong });
  if (!song) {
    return res.status(403).json("Song not present or already deleted");
  }
  
  res.status(200).json(song);
};

export const deleteAllSong = async (req, res) => {
  // To return all the song .
  //Need to validate the user before user can access the file
 
  const song = await SongModel.deleteMany({});
  if (!song.length) {
    return res
      .status(403)
      .json("No Songs Found. Waiting for Songs to get upload");
  }
  console.log("List of songs has been generated.");
  res.status(200).json(song);
};

export const updateASong = async(req,res)=>{


 const songId= req.params.songId;


    /**
     * Model.updateOne(filter, update, options, callback )
     * const filter ={}
     * const update = {
    $set:{
      field:value
    }}
     */
  
    const {songTitle,track,artist,thumbnail,meta} = req.body;
    try{
    const updatedSong = await SongModel.updateOne({_id:songId},{$set:{songTitle,track,artist,thumbnail,meta}});

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


