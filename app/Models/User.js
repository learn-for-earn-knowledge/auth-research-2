'use strict'

const Model = use('Model')

class User extends Model {
    static boot() {
        super.boot()
        this.addHook('beforeCreate', 'User.hashPassword')
    }

    static get traits() {
        return [
            '@provider:Adonis/Acl/HasRole',
            '@provider:Adonis/Acl/HasPermission'
        ]
    }
}

module.exports = User