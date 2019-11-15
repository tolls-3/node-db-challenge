exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          resource_name: "Tolu",
          resource_description: "Project Manager"
        },
        {
          resource_name: "Tomiwa",
          resource_description: "Automation Specialist"
        },
        {
          resource_name: "Tody",
          resource_description: "Project Manager"
        },
        {
          resource_name: "John",
          resource_description: "Project Engineer"
        },
        {
          resource_name: "Friday",
          resource_description: "Project Technician"
        },
        {
          resource_name: "Monday",
          resource_description: "Project Technician"
        }
      ]);
    });
};
