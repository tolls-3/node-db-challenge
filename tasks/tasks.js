const express = require("express");
const Tasks = require("./tasksdb");
const router = express.Router();

router.get("/", (req, res) => {
  Tasks.get()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Internal Server Error: " + err.message });
    });
});

router.post("/", (req, res) => {
  const { task_description, task_notes, project_id } = req.body;

  if (!task_description || !task_notes || !project_id) {
    return res.status(404).json({ message: "Missing tasks body text" });
  } else {
    Tasks.add(req.body)
      .then(task => {
        res.status(201).json(task);
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "Internal Server Error: " + err.message });
      });
  }
});

module.exports = router;