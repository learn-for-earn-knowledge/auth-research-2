'use strict'
const User = use('App/Models/User')
const Hash = use('Hash')
class UserController {

    async signup({ request, auth, response }) {
        // get user data from signup form
        const userData = request.only(['name', 'username', 'email', 'password'])

        try {
            const user = await User.create(userData)
            const token = await auth.generate(user)
            return response.json({
                status: 'success',
                data: token
            })
        } catch (error) {
            return response.status(400).json({
                status: 'error',
                message: 'There was a problem creating the user, please try again later.'
            })
        }
    }

    async login({ request, auth, response }) {
        const { email, password } = request.post()
        try {
            const token = await auth.attempt(email, password)
            return response.json({
                status: 'success',
                data: token
            })
        } catch (error) {
            response.status(400).json({
                status: 'error',
                message: 'Invalid email/password'
            })
        }
    }



}

module.exports = UserController
