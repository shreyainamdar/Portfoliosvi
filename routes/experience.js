const express = require("express");
const router = express.Router();
const EXPERIENCE = require("../model/Experience");
const { body, validationResult } = require("express-validator");

router.post(
  "/addexperience",
  [
    // body("name", "Name cannot be blank").exists(),
    // body("phone", "Enter a valid mobile number").isMobilePhone(),
    // body("email", "Email cannot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const newExp = req.body;

    try {
      const newExperience = await EXPERIENCE.create(newExp);
      res.json(newExperience);
    } catch (error) {
      res.json({
        err: error.message,
      });
    }
  }
);

router.put("/editexperience/:id", async (req, res) => {
  const exp = req.body;

  const id = req.params.id;
  try {
    const editExp = await EXPERIENCE.replaceOne({ _id: id }, exp);

    return res.json({
      msg: "Success",
    });
  } catch (error) {
    res.json({
      msg: error.message,
    });
  }
});

router.get("/getexperience", async (req, res) => {
  try {
    const allExperience = await EXPERIENCE.find();
    res.json(allExperience);
  } catch (error) {
    res.json({
      msg: "Error occured",
    });
  }
});

router.get("/getexperience/:id", async(req, res) => {
  const id = req.params.id;

  try {
    const existExp = await EXPERIENCE.findById({ _id: id });
  if (!existExp) {
    res.json({
      msg: "Experience does not exist",
    });
  } else {
    res.json(existExp);
  }
  } catch (error) {
    res.json({
      msg:error.message
    })
  } 

})

/router.delete("/deleteexperience/:id", async (req, res) => {
 const id = req.params.id;

   try {
    const deletedExp = await EXPERIENCE.deleteOne({ _id:id });
   res.json({
     msg:"Experience deleted"
  });
  } catch (error) {
    res.json({
      msg: error.message,
   });
  }
 });

module.exports = router;
