'use strict'
const Location = use('App/Models/Location')

class LocationController {
  async index() {
    return await Location.all()
  }
}
module.exports = LocationController
