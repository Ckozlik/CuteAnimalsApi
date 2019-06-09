'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')


class Animal extends Model {
  location (){
    
    return this.belongsTo('App/Models/Location')
  }
}

module.exports = Animal
