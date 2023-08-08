import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'
import PortfolioRoute from './Routes/PortfolioRoute.js'
import AuthRoute from './Routes/AuthRoute.js'
import  UserRoute from './Routes/UserRoute.js'
import UploadRoute from './Routes/UploadRoute.js'
import HouseRoute from './Routes/HouseRoute.js'
import PostRoute from './Routes/PostRoute.js'
import EventRoute from './Routes/EventRoute.js'
//Routes

const app = express();

// serve images to client
app.use(express.static('public'))
app.use('/images', express.static("images"))

//Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())
dotenv.config();

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Connecting...at ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));

  // usage of routes
  app.use('/portfolio', PortfolioRoute)
  app.use('/auth', AuthRoute)
  app.use('/user', UserRoute)
  app.use('/upload', UploadRoute)
  app.use('/house', HouseRoute)
  app.use('/post', PostRoute)
  app.use('/event', EventRoute)
