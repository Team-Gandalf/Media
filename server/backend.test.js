const db = require('../database/config.js');
const server = require('./index.js')

// test("GET /", done => {
//   supertest(app)
//     .get("/")
//     .expect(200, JSON.stringify({ name: "John Doe" }))
//     .end(done)
// })

// test('Queries the database using a single unique id', () => {
//   expect(db.getGame("5eb02a9f085eea158d76257f", (err, data) => {
//     if (err) {
//       res.status(404).json(err);
//     } else {
//       res.status(200).json(data);
//     }
//   })).toEqual( {
//     summary: {
//       title: "Gorgeous Cotton Soap",
//       splash: "http://lorempixel.com/640/480/abstract",
//       description: 'Perspiciatis asperiores a ut aliquid vel consequuntur. Possimus dolores non eligendi dolores possimus iusto saepe qui iure. Sit voluptate aliquid. Est harum voluptatem repudiandae blanditiis similique illo provident sit aut.',
//       reviews: { general: "Negative", total: 68178 },
//       releaseDate: "Fri Aug 02 2019 13:56:28 GMT-0400 (Eastern Daylight Time)",
//       developer: "Doyle LLC",
//       publisher: "Thompson, Koelpin and Lind",
//       tags: ["value-added", "sexy"],
//     },
//     media: {
//       video: ["https://youtu.be/QEH0Pu2eulI", "https://youtu.be/QEH0Pu2eulI"],
//       images: ["http://lorempixel.com/640/480/business", "http://lorempixel.com/640/480/business", "http://lorempixel.com/640/480/transport", "http://lorempixel.com/640/480/sports"],
//     },
//   })
// })