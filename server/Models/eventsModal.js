import mongoose from "mongoose";
const EventShema = mongoose.Schema({
    notice:String,
    history: String,
    events: String,
    traditions: String
},
{timestamp: true}
)


const EventModel =  mongoose.model("Events", EventShema);
export default EventModel