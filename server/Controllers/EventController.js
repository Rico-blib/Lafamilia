import EventModel from "../Models/eventsModal.js";

//Post a notice
export const postNotice = async(req, res) => {
    
    const newNotice = new EventModel(req.body)

    try {
        await newNotice.save()
        res.status(200).json(newNotice)
        
    } catch (error) {
        res.status(500).json(error)
    }
}

//get notices
export const getNotice = async(req,res) => {
    try {
        const notices = await EventModel.find()
        if(notices){
            res.status(200).json(notices)
        } else {
            res.status(404).json("No such events")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


//delete notice
export const deleteNotice = async (req, res) => {
   const id = req.params.id
   try {
    await EventModel.findByIdAndDelete(id)
    res.status(200).json("user deleted succesfully")

   } catch (error) {
    res.status(500).json(error)
   }
}