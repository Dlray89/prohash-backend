const db = require('../../knex_config/db_config')

module.exports = {
    find,
    findById,
    add,
    remove,
    update
}


//find all project with find
function find(){
    return db('projects')
}

function findById(id){
    return db('projects')
        .where({id})
        .first();

}

//insert - create a query
function add(projects){
    return db('projects')
        .insert(projects)
        .then(ids => ({ id:ids[0] }))
}


function remove(id){
    return db('projects')
        .where('id', id)
        .del()

}

function update(id, change){
    return db('projects')
        .where({ id })
        .update(change)

}