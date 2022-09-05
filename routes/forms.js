const express = require("express")
const router = express.Router();
const FORMS = require("../model/Forms")

router.post("/addmessage", async (req, res) => {
    const data = req.body;

    try {
        const addMessage = await FORMS.create(data);
        res.json(addMessage);
    } catch (error) {
        res.json({
            msg:error.message
        })
    }
})

module.exports = router;