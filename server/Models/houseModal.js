import mongoose from "mongoose";

const HouseSchema = mongoose.Schema(
    {
        
        house: {
            type: String,
            rquired: true
        },
        parents: [],
        children: [],
        grandchildren: [],
        greatgrand: []

    },
    {timestamps: true}
)
const HouseModel = mongoose.model("Houses", HouseSchema);
export default HouseModel