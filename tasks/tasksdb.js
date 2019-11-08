const db = require("../data/db-config");

module.exports = {
  get,
  getById,
  add
};

function get() {
  return db("tasks")
    .join("projects", "tasks.project_id", "projects.id")
    .select(
      "tasks.id",
      "tasks.task_description",
      "tasks.task_notes",
      "tasks.project_id",
      "projects.project_name",
      "projects.project_description",
      "tasks.completed"
    );
}

function getById(id) {
  return db("tasks")
    .where({ id })
    .first();
}

function add(task) {
  return db("tasks")
    .insert(task)
    .then(ids => {
      return getById(ids[0]);
    });
}
