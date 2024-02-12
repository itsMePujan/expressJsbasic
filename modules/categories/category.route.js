const router = require("express").Router();

//get
router.get("/", (req, res) => {
  res.json({ mssg: "hello from category routers {{getMethod}}" });
});
//post
router.post("/", (req, res) => {
  res.json({ mssg: "hello from category routers {{postMethod}}" });
});
//put
router.put("/", (req, res) => {
  res.json({ mssg: "hello from category routers {{putMethod}}" });
});
//patch
router.patch("/", (req, res) => {
  res.json({ mssg: "hello from category routers {{patchMethod}}" });
});
//delete
router.delete("/", (req, res) => {
  res.json({ mssg: "hello from category routers {{deleteMethod}}" });
});

module.exports = router;
