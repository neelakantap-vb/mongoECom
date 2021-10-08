var MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "E_commerce";

const data = [
  {
    Name: "Best Seller",
    Slug: "best-seller",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Free delivery",
    Slug: "free-delivery",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Lowest ever price",
    Slug: "lowest-ever-price",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Never before price",
    Slug: "never-before-price",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Fast delivery",
    Slug: "free-delivery",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Dummy",
    Slug: "dummy",
    Created_At: new Date(),
    Updated_At: new Date()
  },
];

async function main() {
  let query;
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);

  const insertData = await db.collection("Tags").insertMany(data);
  console.log(insertData.insertedCount + "record inserted");

  const getTags = await db.collection("Tags").find().toArray();
  console.log(getTags);
  
  query = { Name: "Fast delivery" };
  const updatequery = { $set: { Slug: "fast-delivery", Updated_At: new Date() } };
  const updateUser = await db
    .collection("Tags")
    .updateMany(query, updatequery);
  console.log(updateUser.modifiedCount + " record updated");

  query = { Name: "Dummy" };
  const deleteUser = await db.collection("Tags").deleteMany(query);
  console.log(deleteUser.deletedCount + " record deleted");
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());