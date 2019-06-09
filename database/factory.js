'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Animal = use('App/Models/Animal')
const Location = use('App/Models/Location')
// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })
Factory.blueprint('App/Models/Animal', async (faker, i, data) => {
  return {
    name: data.name,
    fun_fact: data.fun_fact,
    location_id: data.location_id
    // location: data.location
  }
})
Factory.blueprint('App/Models/Location', async (faker, i, data) => {
  return {
    name: data.name
  }
})