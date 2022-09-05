const express = require("express");
const router = express.Router();
const PROJECT = require("../model/Projects");
const { body, validationResult } = require("express-validator");

router.post(
  "/addproject",
  [
    // body("name", "Name cannot be blank").exists(),
    // body("phone", "Enter a valid mobile number").isMobilePhone(),
    // body("email", "Email cannot be blank").exists(),
  ],
  async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

    try {
      const newProject = req.body;
      const newPro = await PROJECT.create(newProject);
      res.json(newPro);
    } catch (error) {
      res.json({
        err: error.message,
      });
    }
  }
);

router.get("/getproject", async (req, res) => {
  try {
    const getAllProject = await PROJECT.find();
    res.json(getAllProject);
  } catch (error) {
    res.json({
      msg: error.message,
    });
  }
});

router.get("/getproject/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const existProject = await PROJECT.findById({ _id: id });
  if (!existProject) {
    res.json({
      msg: "Project does not exist",
    });
  } else {
    res.json(existProject);
  }
  } catch (error) {
    res.json({
      msg:error.message
    })
  }  
});

router.put("/editproject/:id", async (req, res) => {
  const pro = req.body;

  const id = req.params.id;
  try {
    const exitPro = await PROJECT.replaceOne({ _id: id }, pro);

    return res.json({
      msg: "Success",
    });
  } catch (error) {
    res.json({
      msg: error.message,
    });
  }
});

router.delete("/deleteproject/:id", async (req, res) => {
  const id = req.params.id;

  const getProject = await PROJECT.findOne({ _id: id });
  if (!getProject) {
    return res.json({
      msg: "Project does not exist",
    });
  }

  try {
    const deletedExp = await PROJECT.deleteOne({ id });
    res.json({
      msg: "Project deleted",
    });
  } catch (error) {
    res.json({
      msg: error.message,
    });
  }
});

module.exports = router;
