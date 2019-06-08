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

Route.get('/animals', async () => {
  return await Animal.all()
})

Route.get('/animal/:id', async ({ params }) => {
  return await Animal.find(params.id)
})

Route.delete('/animal/:id', async ({ params }) => {
  const animal = await Animal.find(params.id)
  await animal.delete();
  return await Animal.all()
})

Route.post('/animals', async ({ request }) => {
  const animal = new Animal();
  const body = request.post();

  animal.name = body.name;
  animal.fun_fact = body.fun_fact;
  animal.location = body.location

  await animal.save()
  return await Animal.all()
})

Route.put('/animal/:id', async ({ request, params }) => {
  const animal = await Animal.find(params.id)
  const body = request.post();

  animal.name = body.name;
  animal.fun_fact = body.fun_fact;
  animal.location = body.location;

  await animal.save()
  return await Animal.all()
})