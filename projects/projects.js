const express = require("express");

const Projects = require("./projectsdb");
const router = express.Router();

router.get("/", (req, res) => {
  Projects.get()
    .then(projects => {
      const newProjects = [];
      projects.map(project => {
        if (project.completed === 0) {
          project = { ...project, completed: false };
          newProjects.push(project);
        } else {
          project = { ...project, completed: true };
          newProjects.push(project);
        }
      });
      res.status(200).json(newProjects);
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
    return res
      .status(404)
      .json({ message: "Missing project name or description" });
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
