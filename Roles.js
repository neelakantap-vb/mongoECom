var MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "E_commerce";

const data = [
  {
    Name: "User",
    Slug: "user",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Admin",
    Slug: "admin",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Staff",
    Slug: "staff",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Owner",
    Slug: "own",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Manager",
    Slug: "manager",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Custom",
    Slug: "custom",
    Created_At: new Date(),
    Updated_At: new Date()
  },
];

async function main() {
  let query;
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);

  const insertData = await db.collection("Roles").insertMany(data);
  console.log(insertData.insertedCount + "record inserted");

  const getRoles = await db.collection("Roles").find().toArray();
  console.log(getRoles);
  
  query = { Name: "Owner" };
  const updatequery = { $set: { Slug: "owner", Updated_At: new Date() } };
  const updateUser = await db
    .collection("Roles")
    .updateMany(query, updatequery);
  console.log(updateUser.modifiedCount + " record updated");

  query = { Name: "Custom" };
  const deleteUser = await db.collection("Roles").deleteMany(query);
  console.log(deleteUser.deletedCount + " record deleted");
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());