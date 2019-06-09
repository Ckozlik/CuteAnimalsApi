'use strict'


/*
|--------------------------------------------------------------------------
| AnimalSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Animal = use('App/Models/Animal')


class AnimalSeeder {
  async run() {
    const animals =
      [
        {
          name: "Elephant",
          fun_fact: "They have very long memories",
          // location: "Africa"
        },
        {
          name: "Giraffe",
          fun_fact: "Giraffes spend 16-20 hours a day feeding",
          // location: "Africa"
        },
        {
          name: "Panda",
          fun_fact: "They eat a lot of bamboo",
          // location: "Asia"
        },
      ]
    //using just seeding 
    // const animal = new Animal()
    // animal.name = "Elephant",
    // animal.fun_fact = "They have very long memories",
    // animal.location = "Africa"

    const animalList = animals.map(async animal => {
      await Factory.model('App/Models/Animal').create(animal)
    })
    await Promise.all(animalList);
  }
}

module.exports = AnimalSeeder
