import mongoose from "mongoose";

const UserShema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password : {
            type: String,
            required: true
        },

        firstname: {
            type: String,
            required: true
        },
        lastname :{
            type: String,
            required: true
        },
        profession:String,
        phone:String,
        email:String,
        isAdmin: {
            type: Boolean,
            default: false,
        },
        house: String,

        profilePicture: String,
        coverPicture: String,
    },
    {timestamps: true}
)

const UserModel = mongoose.model("Users", UserShema);
export default UserModel