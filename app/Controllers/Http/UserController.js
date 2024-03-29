'use strict'
const User = use('App/Models/User')

class UserController {
  async login({ request, response, auth }) {
    const { email, password } = request.all()
    const token = await auth.attempt(email, password)
    response.send(token)
  }
  async create({ request, response, auth }) {
    const { email, password, username } = request.all()
    const newUser = await User.create({ username, email, password });
    const token = await auth.attempt(email, password)
    response.send([newUser, token])
  }
}

module.exports = UserController
