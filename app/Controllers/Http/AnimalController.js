'use strict'
const Animal = use('App/Models/Animal')

class AnimalController {
  async index() {
    return await Animal.all();
  }
  async show({request, response}){
    const animal = await Animal.find(request.params.id);
    response.send(animal);
  }
  async destroy({request, response}){
    const animal = await Animal.find(request.params.id);
    await animal.delete();
    return await Animal.all();
  }
  async store({request, response}){
    const animal = new Animal();
      const body = request.post();
    
      animal.name = body.name;
      animal.fun_fact = body.fun_fact;
      animal.location = body.location
    
      await animal.save()
      const animalList = await Animal.all();
      response.send(animalList);
  }
  async update({request, response}) {
    const animal = await Animal.find(request.params.id)
      const body = request.post();
    
      animal.name = body.name;
      animal.fun_fact = body.fun_fact;
      animal.location = body.location;
    
      await animal.save()
      const animalList = await Animal.all();
      response.send(animalList);
  }
}

module.exports = AnimalController






