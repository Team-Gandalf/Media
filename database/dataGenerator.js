const faker = require('faker');
const db = require('./config');

let counter = 0;

const options = ['Overwhelmingly Positive', 'Very Positive', 'Positive', 'Mostly Positive', 'Mixed', 'Mostly Negative', 'Negative', 'Very Negative', 'Overwhelmingly Negative'];

const vidOptions = [{video: 'https://assets.bonappetit.com/clips/5e908f11a19ab80008f8f97e/720p/pass/BA_BAO_S06_Ep048_Basically_CinnamonDateSwirlBuns_01_WARM_OIL_BUTTERMILK_.mp4.mp4', thumbnail: faker.image.image()}, {video: 'https://assets.bonappetit.com/clips/5e7ccde8fc61e900083835d3/720p/pass/BA_BAO_S06_Ep046_Basically_StickyCardamomCarrotCake_01_PREP_PAN_.mp4.mp4', thumbnail: faker.image.image()}, {video: 'https://assets.bonappetit.com/clips/5e865fc91e6e3f000851ca11/720p/pass/BA_BAO_S06_Ep047_Basically_TrippleThreatOnioinGalette_01_DRY_MIX_BUTTER_.mp4.mp4', thumbnail: faker.image.image()}, {video: 'https://assets.bonappetit.com/clips/5e6a81965174050008cae91a/720p/pass/BA_BAO_S06_Ep039_Basically_SourCreamAndOnionBiscuits_03a_CUT_SCALLIONS_.mp4.mp4', thumbnail: faker.image.image()}, {video: 'https://assets.bonappetit.com/clips/5e74f540d906210008988be6/720p/pass/BA_BAO_S06_Ep045_Basically_TahiniBillionairesBars_01_PREP_PAN_.mp4.mp4', thumbnail: faker.image.image()}];


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
      summary: {
        title: faker.commerce.productName(),
        splash: faker.image.abstract(),
        description: faker.lorem.paragraph(),
        reviews: { general: options[Math.floor(Math.random() * 9)], total: faker.random.number() },
        releaseDate: faker.date.past(),
        developer: faker.company.companyName(),
        publisher: faker.company.companyName(),
        tags: tagList,
      },
      media: {
        video: vids,
        images: pics,
      },
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
