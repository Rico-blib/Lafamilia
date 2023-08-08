import UserModel from "../Models/userModal.js";


//adding a new user
export const  adduser = async(req, res) => {
    const {firstname, lastname, profession,phone, email} = req.body;
    const newUser = new UserModel({firstname, lastname, profession, phone, email})

    try {
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getPortfolios = async (req, res) => {
  try {
    const portfolios = await UserModel.find();
    // console.log(portfolios)
    if (portfolios) {
      
      res.status(200).json(portfolios);
    } else {
      res.status(404).json("No such portfolios exists");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};