const express = require("express");

const Projects = require("./projectsdb");
const router = express.Router();

router.get("/", (req, res) => {
  Projects.get()
    .then(projects => {
      console.log(projects)
      res.status(200).json(projects);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Internal Server Error: " + err.message });
    });
});

router.post("/", (req, res) => {
  const { project_name, project_description } = req.body;

  if (!project_name || !project_description) {
    return res.status(404).json({ message: "Missing project name or description" });
  } else {
    Projects.add(req.body)
      .then(project => {
        res.status(201).json(project);
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "Internal Server Error: " + err.message });
      });
  }
});

module.exports = router;
