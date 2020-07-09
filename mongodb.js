// CRUD Create, Read, Update and Delete

const { MongoClient, ObjectID} = require('mongodb');

const contectionURL = 'mongodb://127.0.0.1:27017'; // 'localhost' is causing some strange issues
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.getTimestamp());
// console.log(id.toHexString().length);

MongoClient.connect(contectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) return console.log('Unable to connect to database!');

  const db = client.db(databaseName);
 
  db.collection('users').deleteOne({ name: 'Ernesto' })
    .then(res => console.log(res))
});
