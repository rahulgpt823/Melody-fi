import mongoose from "mongoose";



// const IArtist={
//     artistName:"",
//     artistImage:""
// }

// interface ICredit {
//     title:String;
//     performedBy:String[];
//     writtenBy:String[];
//     producedBy:String[];
//     source:String;
// }

export const CreditSchema = new mongoose.Schema({
  title: { type: String, required: false },
  performedBy: [{ type: String, required: false }],
  writtenBy: [{ type: String, required: false }],
  producedBy: [{ type: String, required: false }],
  source: { type: String, required: false },
});

export const SongSchema = new mongoose.Schema(
  {
    songTitle: { type: String, required: true },
    track: { type: String, required: true }, //sound file : for now String, need to work on it later on
    artist: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    }, // we can fetch it from the usermodel(_id) itself as artist will also be a user on the app
    thumbnail: { type: String, required: true },
    meta: { type: CreditSchema, required: false },
  },
  { timestamps: true },
);

export const SongModel = new mongoose.model("Songs", SongSchema, "song");


export default SongModel;
