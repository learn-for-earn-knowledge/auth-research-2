'use strict'

class User {
  get rules () {
    return {
      username: "required|unique:users",
      email: 'required|email|unique:users',
      password: 'required',
      password_confirmation: 'required_if:password|same:password',
    }
  }
  get message() {
    return {
      
    }
  }
}

module.exports = User
