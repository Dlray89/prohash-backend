const db = require('../../knex_config/db_config')

module.exports = {
    find
}


//find all project with find
function find(){
    return db('projects')
}