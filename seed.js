db = require('./model');

db.sync({force: true})
.then(() => {
  console.log('Synced to database!');
  db.close();
})
.catch(error => {
  console.log('Disaster! Something went wrong!');
  console.log(error);
  db.close();
})
