const mongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017";
const dbname = "mongo-test";

mongoClient.connect(url, {}, (error, client) => {
  if (error) console.log("can not connect to the datebase");

  const db = client.db(dbname);

  // Adding one item to collection
  //   db.collection("users").insertOne(
  //     {
  //       name: "Krzystof",
  //       age: 31,
  //     },
  //     (error, result) => {
  //       if (error) console.log("Adding user error", error);
  //       console.log(result.ops);
  //     }
  //   );

  // find user with older guys than 26. More info https://docs.mongodb.com/manual/reference/operator/query-comparison/
  //   db.collection("users")
  //     .find({
  //       age: { $gt: 26 },
  //     })
  //     .toArray((error, users) => {
  //       console.log(users);
  //     });

  // delete items from collection
  //   db.collection("users").deleteMany({ name: "Krzystof" }, (error, result) => {
  //     console.log(result.deletedCount);
  //   });

  // finding collection. More methods https://docs.mongodb.com/manual/reference/method/js-collection/
  db.collection("users")
    .find({})
    .toArray((error, users) => {
      console.log(users);
    });

  console.log("Datebase connection is ok");
});
