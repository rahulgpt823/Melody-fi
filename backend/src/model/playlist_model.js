import mongoose from "mongoose";

// const IArtist={
//     artistName:"",
//     artistImage:""
// }

export interface IMeta {
   timeline:string;
    likes:string[];
    songList:[mongoose.Types.ObjectId],ref:"song";
}

const PlaylistSchema = new mongoose.Schema({
    playlistTitle:{type:String , required:true},
    thumbnail:{type:String , required:true},
    createdBy:{type:mongoose.Types.ObjectId , ref: "user",},
    likes:{type:string},
    totalSong:{type:string,required:true,default:"null"},
    meta:{type:IMeta},

})

const PlaylistModel =  new mongoose.model(PlaylistModel,PlaylistSchema,"playlist");