'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnimalsSchema extends Schema {
  up() {
    this.table('animals', (table) => {
      table.dropColumn("location")
      table.integer("location_id").unsigned().after("fun_fact");
      table
        .foreign("location_id")
        .references("id")
        .inTable("locations");
    })
  }

  down() {
    this.table('animals', (table) => {
      table.dropForeign('location_id');
      table.dropColumn('location_id');
      table.string("location");
    })
  }
}

module.exports = AnimalsSchema
