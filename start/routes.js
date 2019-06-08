'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});
// const Database = use('Database')
const Animal = use('App/Models/Animal')

Route.get('/animals', "AnimalController.index").as('animals.index')

Route.get('/animal/:id', 'AnimalController.show').as('animals.show')

Route.delete('/animal/:id', 'AnimalController.destroy').as('animals.destroy')

Route.post('/animals', 'AnimalController.store').as('animals.store')

Route.put('/animal/:id', 'AnimalController.update').as('animals.update')

