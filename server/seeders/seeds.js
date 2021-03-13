const faker = require('faker');

const db = require('../config/connection');
const { User, Pet } = require('../models');

db.once('open', async () => {
    await User.deleteMany({});
    await Pet.deleteMany({});
  
    // create user data
    const userData = [];
  
    for (let i = 0; i < 10; i += 1) {
      const username = faker.internet.userName();
      const email = faker.internet.email(username);
      const password = faker.internet.password();
  
      // push User attributes to userData array
      userData.push({ username, email, password });
    }
  
    const createdUsers = await User.collection.insertMany(userData);
  
    // create Pets
    let petData = [];
    
    for (let i = 0; i < 20; i += 1) {
      
        // create random name
        const name = faker.name.firstName();

        // create pet type
        const type = faker.random.arrayElement(["dog", "cat"]);
        // create random age
        const age = faker.random.number(15);

        // create ageClass
        const ageClass = faker.random.arrayElement(["young", "adult", "senior"]);

        // create animal size
        const size = faker.random.arrayElement(["small", "medium", "large"]);

        // create behavior
        const behavior = faker.random.arrayElements(["kids", "cats", "dogs"]);
        
        // create medical
        const medical = true;

        // create random animal image
        const photo = faker.image.animals();

        // create animal sex
        const sex = faker.random.arrayElement(["M", "F"]);

        // create about text
        const about = faker.lorem.words(Math.round(Math.random() * 20) + 1);

        petData.push({ name, type, age, ageClass, size, behavior, medical, photo, sex, about });

    }
  
    const createdPets = await Pet.collection.insertMany(petData);
    
    console.log('Seeding is done!');
    process.exit(0);
  });