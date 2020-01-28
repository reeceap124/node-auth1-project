
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
        tbl.increments('id');
        tbl.string('username')
            .unique()
            .nonNullable();
        tbl.string('password')
            .nonNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
