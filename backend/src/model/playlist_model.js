import mongoose from "mongoose";

// const IArtist={
//     artistName:"",
//     artistImage:""
// }

export const playlistMetaSchema = new Schema ({
   timeline:{type:String , required:false},
    likes:{type:[String] , required:false,},
    songList:{type:[mongoose.Types.ObjectId] , ref: "Songs",default:[]},
   collabarator:{type:[String] , required:false},
})

export const PlaylistSchema = new mongoose.Schema({
    playlistTitle:{type:String , required:true},
    thumbnail:{type:String , required:true},
    createdBy:{type:mongoose.Types.ObjectId , ref: "User",},
    likes:{type:string,required:false},
    totalSong:{type:string,required:false,default:"null"},
    meta:{type:playlistMetaSchema},

})

const PlaylistModel =  new mongoose.model("Playlist",PlaylistSchema,"playlist");

export default PlaylistModel;