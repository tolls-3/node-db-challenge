exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          task_description: "First fix works for Control4 Home Automation",
          task_notes: "Piping and Cabling to be done by Technician",
          completed: 0,
          project_id: 1
        },
        {
          task_description: "Second fix works for Schneider Electric BMS",
          task_notes: "Installation of field devices to be done today",
          completed: 0,
          project_id: 2
        },
        {
          task_description: "Stakeholders meetings for Schneider Electric BMS",
          task_notes:
            "We need to discuss about the impact of FOREX on the project delivery",
          completed: 0,
          project_id: 2
        },
        {
          task_description: "Commissioning of Extra Low Voltage Project",
          task_notes:
            "Ensure proper documentation and handover is done to client",
          completed: 0,
          project_id: 3
        }
      ]);
    });
};
