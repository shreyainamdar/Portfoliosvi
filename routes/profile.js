const express = require("express");
const router = express.Router();
const PROFILE = require("../model/Profile");
const project = require("../model/Projects");

router.post("/addprofile", async (req, res) => {
  const data = req.body;

  try {
    const addProfile = await PROFILE.create(data);
    res.json(addProfile);
  } catch (error) {
    res.json({
      msg: error.message,
    });
  }
});

router.put("/editprofile/:id", async (req, res) => {
  const data = req.body;
  const id = req.params.id

  try {
    const updateUser = await PROFILE.updateOne({ _id: id }, data);
    res.json(updateUser);
  } catch (error) {
    res.json({
      msg: error.message,
    });
  }
});

router.get("/getprofile/:id", async (req, res) => {
  const id = req.params.id
  try {
    const getData = await PROFILE.findById({_id:id});
    res.json(getData);
  } catch (error) {
    res.json({
      msg: error.message,
    });
  }
});

module.exports = router;
