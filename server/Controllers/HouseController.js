import HouseModel from '../Models/houseModal.js'
// Registering a new house
export const registerHouse = async (req, res) => {

    const newHouse = new HouseModel(req.body);
   // console.log("new hs", newHouse)
    const {house} = req.body
    try {
        const oldHouse = await HouseModel.findOne({house});
        if (oldHouse) {
            return res.status(400).json({message: "house already exist"})
        }

        const famHouse = await newHouse.save();
        res.status(200).json(famHouse)
    } catch (error) {
        
    }
}

export const getHouses = async (req, res) => {
    try {
      const houses = await HouseModel.find();
      // console.log(houses)
      if (houses) {
        
        res.status(200).json(houses);
      } else {
        res.status(404).json("No such houses exists");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };
  //update house
  export const updateHouse = async (req, res) => {
    // const id = req.params.id;
    const { id} = req.body;
  
    // if (id === _id) {
      try {
        
  
        const user = await HouseModel.findByIdAndUpdate(id, req.body);
  
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json(error);
        console.log(error)
      }
    // } else {
    //   res.status(403).json("Access Denied! you can only update your own profile");
    // }
  };