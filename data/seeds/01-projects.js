exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "Control4 Home Automation",
          project_description:
            "3 bedroom apartment setup at Banana Island, Lagos",
          completed: 0
        },
        {
          project_name: "Schneider Electric BMS",
          project_description: "HVAC monitoring and control at Bauchi.",
          completed: 0
        },
        {
          project_name: "Extra Low Voltage Project",
          project_description:
            "CCTV, Access control and Fire detectiona and alarm system at Chevron drive, Lagos.",
          completed: 0
        }
      ]);
    });
};
