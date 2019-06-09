'use strict'

/*
|--------------------------------------------------------------------------
| LocationSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class LocationSeeder {
  async run() {
    const locations = [
      {
        name: "Africa"
      },
      {
        name: "North America"
      },
      {
        name: "Asia"
      },
      {
        name: "South America"
      },
      {
        name: "Antarctica"
      },
      {
        name: "Europe"
      },
      {
        name: "Australia"
      }
    ]
    const locationList = locations.map(async location => {
      await Factory.model('App/Models/Location').create(location)
    })
    await Promise.all(locationList);
  }
}
module.exports = LocationSeeder
