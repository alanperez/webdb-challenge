exports.seed = function(knex, Promise) {
  return knex("actions").insert([
    {
      project_id: 1,
      description: "DESCRIPT TEST 1",
      notes: "notes for descript test one",
      completed: "false"
    },
    {
      project_id: 1,
      description: "DESCRIPT TEST 1.5",
      notes: "test 1.5",
      completed: "false"
    },
    {
      project_id: 2,
      description: "DESCRIPT TEST 2",
      notes: "the notes for decript test two",
      completed: "false"
    },
    {
      project_id: 3,
      description: "DESCRIPT TEST 3",
      notes: "notes for description three",
      completed: "false"
    }
  ]);
};
