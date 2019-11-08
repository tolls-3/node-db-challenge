const express = require("express");
const projectsRouter = require("./projects/projects");
const resourcesRouter = require("./resources/resources");
const tasksRouter = require("./tasks/tasks");
const server = express();

server.use(express.json());
server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter);

module.exports = server;
