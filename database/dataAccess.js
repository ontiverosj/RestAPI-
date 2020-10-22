const Client = require('./Client')
const client = new Client()


 module.exports.createOne = async function createOne(object, collection) { 
    const created = await client.db().collection(collection).insertOne(object) 
    client.disconnect()

    return created.insertCount === 1 
}

module.exports.getAll = async function getAll(collection) { 
    const data =  await client.db().collection(collection).find({}).toArray()
    client.disconnect()

    return data 
}