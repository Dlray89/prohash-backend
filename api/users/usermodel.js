const userDb = require('../../knex_config/db_config')

module.exports = {
    find,
    findBy,
    findById,
    findByUsername,
    add
}

function find() {
    return userDb('users').select('id', 'username', 'roles').orderBy('id')
}

function findBy(filter) {
    return userDb('users').where(filter).orderBy('id')
}

function findById(id) {
    return userDb('users').where({ id }).first()
}

function findByUsername(username) {
    return userDb('users').where({ username }).first()
}

async function add(user) {
    try {
        const [id] = await userDb('users').insert(user, 'id')

        return findById(id)
    } catch (error) {
        throw error
    }
}

