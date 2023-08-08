import mongoose from 'mongoose';

const AlbumSchema = mongoose.Schema({
    userId: {type:String,required:true},
    desc: String,
    image: String,
},
{timestamps: true}
);

var PostModel =  mongoose.model("Album", AlbumSchema)
export default PostModel;