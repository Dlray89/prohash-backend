const tagdb = require('../../knex_config/db_config')

module.exports = {
    find,
    findById,
    add,
    remove,
    update,
    
}

function find(){
return tagdb("tags")
}

function findById(id){
    return tagdb('tags')
        .where({id})
        .first();

}

function add(tag){
return tagdb("tags")
.insert(tag, 'id')
.then(ids => ({ id: ids[0]}))
}

function update(id, changes){
    return tagdb('tags')
    .where('id', id)
    .update(changes)
    .then(count => (count > 0 ? findById(id) : null ))
}

function remove(id){
    return tagdb('tags')
    .where('id', id)
    .del()
}