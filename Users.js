var MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "E_commerce";

const data = [
  {
    First_Name: "Abhi",
    Last_Name: "P",
    Email: "abhi@gmail.com",
    Profile_Image: "http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    Role: "user",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    First_Name: "Basav",
    Last_Name: "G",
    Email: "basav@gmail.com",
    Profile_Image: "http://dummyimage.com/209x100.png/dddddd/000000",
    Role: "user",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    First_Name: "Channu",
    Last_Name: "G",
    Email: "channu@gmail.com",
    Profile_Image: "http://dummyimage.com/209x100.png/dddddd/000000",
    Role: "staff",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    First_Name: "Channu",
    Last_Name: "G",
    Email: "channu1@gmail.com",
    Profile_Image: "http://dummyimage.com/209x100.png/dddddd/000000",
    Role: "user",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    First_Name: "Yash",
    Last_Name: "P",
    Email: "yash@gmail.com",
    Profile_Image: "http://dummyimage.com/209x100.png/dddddd/000000",
    Role: "staff",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    First_Name: "Ram",
    Last_Name: "G",
    Email: "rama@gmail.com",
    Profile_Image: "http://dummyimage.com/209x100.png/dddddd/000000",
    Role: "user",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    First_Name: "Puneeth",
    Last_Name: "R",
    Email: "puneeth@gmail.com",
    Profile_Image: "http://dummyimage.com/209x100.png/dddddd/000000",
    Role: "user",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    First_Name: "Shiva",
    Last_Name: "P",
    Email: "shiva@gmail.com",
    Profile_Image: "http://dummyimage.com/209x100.png/dddddd/000000",
    Role: "manager",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    First_Name: "Sudeep",
    Last_Name: "P",
    Email: "sudeep@gmail.com",
    Profile_Image: "http://dummyimage.com/209x100.png/dddddd/000000",
    Role: "user",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    First_Name: "Ganesh",
    Last_Name: "P",
    Email: "ganesh@gmail.com",
    Profile_Image: "http://dummyimage.com/209x100.png/dddddd/000000",
    Role: "admin",
    Created_At: new Date(),
    Updated_At: new Date()
  }
];

async function main() {
  let query;
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);

  const insertData = await db.collection("Users").insertMany(data);
  console.log(insertData.insertedCount + "record inserted");

  const getusers = await db.collection("Users").find().toArray();
  console.log(getusers);
  
  query = { First_Name: "Ram" };
  const updatequery = { $set: { Role: "Operator", Updated_At: new Date() } };
  const updateUser = await db
    .collection("Users")
    .updateMany(query, updatequery);
  console.log(updateUser.modifiedCount + " record updated");

  query = { Email: "channu1@gmail.com" };
  const deleteUser = await db.collection("Users").deleteMany(query);
  console.log(deleteUser.deletedCount + " record deleted");
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());