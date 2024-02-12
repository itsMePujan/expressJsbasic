const router = require("express").Router();

//get
router.get("/", (req, res) => {
  res.json({ mssg: "hello from blogs routers {{getMethod}}" });
});
//post
router.post("/", (req, res) => {
  res.json({ mssg: "hello from blgs routers {{postMethod}}" });
});
//put
router.put("/", (req, res) => {
  res.json({ mssg: "hello from blogs routers {{putMethod}}" });
});
//patch
router.patch("/", (req, res) => {
  res.json({ mssg: "hello from blogs routers {{patchMethod}}" });
});
//delete
router.delete("/", (req, res) => {
  res.json({ mssg: "hello from blogs routers {{deleteMethod}}" });
});

module.exports = router;
