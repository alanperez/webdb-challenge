
exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      name: "Project Test 1",
      description: "testing of project 1",
      completed: "false"
    },
    {
      name: "Project Test 2",
      description: "testing 2",
      completed: "false"
    },
    {
      name: "Project Test 3",
      description: "please work",
      completed: "false"
    }
  ]);
};
