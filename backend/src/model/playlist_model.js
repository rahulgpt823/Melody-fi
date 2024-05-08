import mongoose from "mongoose";

// const IArtist={
//     artistName:"",
//     artistImage:""
// }

export const playlistMetaSchema = new mongoose.Schema ({
   timeline:{type:String , required:false},
    likes:{type:[String] , required:false,},
    songList:{type:[String] , ref: "Songs",default:[]},
   collaborator:{type:[String] , required:false},
})

export const PlaylistSchema = new mongoose.Schema({
    playlistTitle:{type:String , required:true},
    description:{type:String},
    thumbnail:{type:String , required:true},
    //createdBy:{type:mongoose.Types.ObjectId , ref: "User",},
    createdBy:{type:String, required:false},
    totalSong:{type:[String],required:false,default:"null"},
    meta:{type:playlistMetaSchema, required:false},

})

const PlaylistModel =  new mongoose.model("Playlist",PlaylistSchema,"playlist");

export default PlaylistModel;