import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";

// Create new Post
export const createPost = async(req,res)=> {
    const newPost = new PostModel(req.body)

    try {
        await newPost.save()
        res.status(200).json(newPost)
    } catch (error) {
        res.status(500).json(error)
    }
}



// Get Posts
export const getPosts = async (req, res) => {
    try {
      const posts = await PostModel.find();
  
      if (posts) {
        
        res.status(200).json(posts);
      } else {
        res.status(404).json("No such albums exists");
      }
    } catch (error) {
      res.status(500).json(error);
      console.log(error.message)
    }
  };

//Get TimelinePosts