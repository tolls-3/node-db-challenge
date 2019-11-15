const express = require("express");
const Resources = require("./resourcesdb");
const router = express.Router();

router.get("/", (req, res) => {
  Resources.get()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Internal Server Error: " + err.message });
    });
});

router.post("/", (req, res) => {
  const { resource_name, resource_description } = req.body;

  if (!resource_name || !resource_description) {
    return res
      .status(404)
      .json({ message: "Missing resource name or description" });
  } else {
    Resources.add(req.body)
      .then(resource => {
        res.status(201).json(resource);
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "Internal Server Error: " + err.message });
      });
  }
});

module.exports = router;
