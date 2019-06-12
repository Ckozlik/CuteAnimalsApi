'use strict'
const Location = use('App/Models/Location')

class LocationController {
  async index() {
    return await Location.all()
  }

async show({ request, response }) {
  const location = await Location.find(request.params.id);
  response.send(location);
}

async destroy({ request, response }) {
  const location = await Location.find(request.params.id);
  await location.delete();
  const locationList = await Location.all()
  response.send(locationList)
}

async store({ request, response }) {
  const location = new Location();
  const body = request.post();

  location.name = body.name;
  

  await location.save()
  const locationList = await Location.all()
  response.send(locationList);
}

async update({ request, response }) {
  const location = await Location.find(request.params.id)
  const body = request.post();

  location.name = body.name;
 

  await location.save()
  const animalList = await Location.all()
  response.send(animalList);
}
}

module.exports = LocationController
