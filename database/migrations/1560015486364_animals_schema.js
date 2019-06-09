'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnimalsSchema extends Schema {
  up() {
    this.create('animals', (table) => {
      table.increments()
      table.string("name", 255).notNullable();
      table.string("fun_fact", 255)
      table.string("location", 255)
      table.timestamps()
    })
  }

  down() {
    this.drop('animals')
  }
}

module.exports = AnimalsSchema
