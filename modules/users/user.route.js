const router = require("express").Router();
//get
router.get("/", (req, res) => {
  res.json({ mssg: "hello from user routers {{getMethod}}" });
});
//post
router.post("/:name", (req, res) => {
  console.log(req.params);
  res.json({ mssg: "hello from user routers {{postMethod}}" });
});
//put
router.put("/", (req, res) => {
  res.json({ mssg: "hello from user routers {{putMethod}}" });
});
//patch
router.patch("/", (req, res) => {
  res.json({ mssg: "hello from user routers {{patchMethod}}" });
});
//delete
router.delete("/", (req, res) => {
  res.json({ mssg: "hello from user routers {{deleteMethod}}" });
});

module.exports = router;
