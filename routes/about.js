const express = require("express");
const router = express.Router();

router.get("/about", (req, res) => {
  res.json({ mess: " this is about route" });
});

module.exports = router;
