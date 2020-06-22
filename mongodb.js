// CRUD Create, Read, Update and Delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const contectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(contectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!');
  }

  const db = client.db(databaseName);
 
  db.collection('users').insertOne({
    name: 'Lucas',
    age: 36
  })
  .then(res => console.log(res.ops))
  .catch(error => console.log('Unable to insert user!'))
})