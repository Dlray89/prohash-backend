const taskdb = require("../../knex_config/db_config")


module.exports = {
    find,
    findById,
    add,
    remove,
    update,
    
}

function find(){
return DB("tasks")
}

function findById(id){
    return db('tasks')
        .where({id})
        .first();

}

function add(task){
return DB("tasks")
.insert(task, 'id')
.then(ids => ({ id: ids[0]}))
}

function update(id, changes){
    return DB('tasks')
    .where('id', id)
    .update(changes, '*')
    
}

function remove(id){
    return DB('tasks')
    .where('id', id)
    .del()
}

