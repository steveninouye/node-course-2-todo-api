const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // findOneAndUpdate
  db
    .collection('Users')
    .findOneAndUpdate(
      { name: 'Steven Inouye' },
      {
        $set: {
          name: 'Marc Jacobs'
        },
        $inc: {
          age: 2
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result);
    });
  //   db.close();
});
