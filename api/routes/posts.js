const router = require("express").Router();
const Post = require("../models/Posts");
const User = require("../models/User");

// CREATE
router.post("/", async (req,res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/:id", async (req,res) => {
  try {
    const post = await Post.findById(req.params.id);
      if (post.username === req.body.username) {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id,
          {$set:req.body},
          {new:true}
        );
        res.status(200).json(updatedPost);
      } else {
        res.status(401).json("You can only update your own posts");
      }

  } catch(err) {
    res.status(404).json(err);
  }
});

// Delete post
router.delete("/:id", async (req,res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      const deletedPost = await Post.findByIdAndDelete(req.params.id);
      res.status(200).json("Your post has been deleted");
    } else {
      res.status(401).json("You can only delete your own posts");
    }
  } catch(err) {
    res.status(404).json(err);
  }
});

// Get a post
router.get("/:id", async (req,res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch(err) {
    res.status(404).json(err);
  }
});

// Get all Posts
router.get("/", async (req,res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      // {username} is the same as {username:username} is Es6 :O
      posts = await Post.find({username})
    } else if (catName) {
      posts = await Post.find({categories: {
        $in:[catName]
      }
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch(err) {
    res.status(404).json(err);
  }
});

module.exports = router
