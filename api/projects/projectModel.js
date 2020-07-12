const db = require('../../knex_config/db_config')

module.exports = {
    find
}

function find(){
    return db('projects')
}