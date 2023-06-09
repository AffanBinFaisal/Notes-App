const router = require("express").Router();
const Post = require("../models/Post");

//CREATE POST
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  const catName = req.query.cat;
  const q = req.query.q;
  try {
    let posts;
    if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    }
    if (q) {
      posts = await Post.find({
        title:{'$regex' : q, '$options' : 'i'}
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/search", async (req, res) => {
  console.log(req.query);
  let q = req.query.q;
  try {
    res.status(200).json({ name: "affan" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
