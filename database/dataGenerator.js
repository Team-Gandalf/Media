const faker = require('faker');
const db = require('./config');

let counter = 0;

const options = ['Overwhelmingly Positive', 'Very Positive', 'Positive', 'Mostly Positive', 'Mixed', 'Mostly Negative', 'Negative', 'Very Negative', 'Overwhelmingly Negative'];

const vidOptions = ['https://youtu.be/dQw4w9WgXcQ', 'https://youtu.be/BBGEG21CGo0', 'https://youtu.be/y8Kyi0WNg40', 'https://youtu.be/QEH0Pu2eulI', 'https://youtu.be/ownXgkMQv8g'];


const seeder = () => {
  while (counter < 100) {
    const pics = [];
    for (let i = 0; i < Math.ceil(Math.random() * 10); i++) {
      pics.push(faker.image.image());
    }

    const tagList = [];
    for (let i = 0; i < Math.ceil(Math.random() * 10); i++) {
      tagList.push(faker.company.bsAdjective());
    }

    const vids = [];
    for (let i = 0; i < Math.ceil(Math.random() * 3); i++) {
      vids.push(vidOptions[Math.floor(Math.random() * 5)]);
    }

    const data = {
      title: faker.commerce.productName(),
      video: vids,
      images: pics,
      splash: faker.image.abstract(),
      description: faker.lorem.paragraph(),
      reviews: { general: options[Math.floor(Math.random() * 9)], total: faker.random.number() },
      releaseDate: faker.date.past(),
      developer: faker.company.companyName(),
      publisher: faker.company.companyName(),
      tags: tagList,
    };
    db.addNewGame(data, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`successfully inserted ${counter + 1}`);
      }
    });
    counter += 1;
  }
};

seeder();
