const taskdb = require("../../knex_config/db_config")


module.exports = {
    find,
    findById,
    add,
    remove,
    update,
    
}

function find(){
return taskdb("tasks")
}

function fintaskdbyId(id){
    return taskdb('tasks')
        .where({id})
        .first();

}

function add(task){
return taskdb("tasks")
.insert(task, 'id')
.then(ids => ({ id: ids[0]}))
}

function update(id, changes){
    return taskdb('tasks')
    .where('id', id)
    .update(changes, '*')
    
}

function remove(id){
    return taskdb('tasks')
    .where('id', id)
    .del()
}

