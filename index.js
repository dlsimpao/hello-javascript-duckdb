const { faker } = require('@faker-js/faker');
var duckdb = require('duckdb');

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

console.log(randomName)
console.log(randomEmail)

// var db = new duckdb.Database(':memory:');

// var con = db.connect();

// con.run('CREATE TABLE a (i INTEGER)');
// var stmt = con.prepare('INSERT INTO a VALUES (?)');
// for (var i = 0; i < 10; i++) {
//   stmt.run(i);
// }
// stmt.finalize();
// con.all('SELECT * FROM a', function(err, res) {
//   if (err) {
//     throw err;
//   }
//   console.log(res)
// });