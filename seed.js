db = require('./model');

db.db.sync({force: true})
.then(() => {
  console.log('Synced to database!');
   //vegetables
 
const veg1 = db.Vegetable.create({name: 'carrot', color: 'orange', planted_on: 2018-12-25})
const veg2 = db.Vegetable.create({name: 'peas', color: 'green', planted_on: 2017-06-14})
const veg3 = db.Vegetable.create({name: 'corn', color: 'yellow', planted_on: 2018-02-14})


  Promise.all([veg1, veg2, veg3])
  .then( () => {
    const people1 = db.Gardener.create({name: "Bill", age: 45, favoriteVegetableId: 1})
    const people2 = db.Gardener.create({name: "George", age: 64, favoriteVegetableId: 2})
    Promise.all([people1, people2]).then(() => {
      const plot1 = db.Plot.create({size: 10, shaded: "yes", gardenerId: 2});
      const plot2 = db.Plot.create({size: 5, shaded: "no", gardenerId: 1});

      Promise.all([plot1, plot2]).then( () => {
        db.db.close();
        });
    })
  })
  
  

})
.catch(error => {
  console.log('Disaster! Something went wrong!');
  console.log(error);
  db.db.close();
})
