
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', (tbl) => {
		tbl.increments();

		tbl.string('project_name').notNullable();
		tbl.text('description').notNullable();
		tbl.boolean('completed').notNullable().defaultTo(false);
	});
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
