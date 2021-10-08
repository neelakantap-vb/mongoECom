var MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "E_commerce";

const data = [
  {
    Product: "MI 11X 5G",
    User: "Ganesh",
    Product_Qty: 2,
    Base_Price: 34999,
    Sell_Price: 26999,
    Total_Price: 26999*2,
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Product: "Redmi 126cm 4K Ultra HD Android Smart LED TV",
    User: "Ganesh",
    Product_Qty: 3,
    Base_Price: 44999,
    Sell_Price: 32999,
    Total_Price: 32999*3,
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Product: "Amazfit GTS2 Mini Smart Watch",
    User: "Ganesh",
    Product_Qty: 4,
    Base_Price: 9999,
    Sell_Price: 5999,
    Total_Price: 5999*4,
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Product: "MI 11X 5G",
    User: "Shiva",
    Product_Qty: 1,
    Base_Price: 34999,
    Sell_Price: 26999,
    Total_Price: 26999*1,
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Product: "Amazfit GTS2 Mini Smart Watch",
    User: "Shiva",
    Product_Qty: 5,
    Base_Price: 9999,
    Sell_Price: 5999,
    Total_Price: 5999*5,
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Product: "MI 11X 5G",
    User: "Ram",
    Product_Qty: 2,
    Base_Price: 34999,
    Sell_Price: 26999,
    Total_Price: 26999*2,
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Product: "Redmi 126cm 4K Ultra HD Android Smart LED TV",
    User: "Ram",
    Product_Qty: 2,
    Base_Price: 44999,
    Sell_Price: 32999,
    Total_Price: 32999*2,
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Product: "Acer Nitro 5 11th Gen Intel Core i5-11400H 15.6-inch Gaming Laptop",
    User: "Ram",
    Product_Qty: 1,
    Base_Price: 100000,
    Sell_Price: 69990,
    Total_Price: 69990*1,
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Product: "MI 11X 5G",
    User: "Sudeep",
    Product_Qty: 1,
    Base_Price: 34999,
    Sell_Price: 26999,
    Total_Price: 26999*1,
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Product: "Acer Nitro 5 11th Gen Intel Core i5-11400H 15.6-inch Gaming Laptop",
    User: "Puneeth",
    Product_Qty: 1,
    Base_Price: 100000,
    Sell_Price: 69990,
    Total_Price: 69990*1,
    Created_At: new Date(),
    Updated_At: new Date()
  },
];

async function main() {
  let query;
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);

  const insertData = await db.collection("Carts").insertMany(data);
  console.log(insertData.insertedCount + "record inserted");

  const getCarts = await db.collection("Carts").find().toArray();
  console.log(getCarts);
  
  query = { User: "Ganesh", Product: "Redmi 126cm 4K Ultra HD Android Smart LED TV" };
  const updatequery = { $set: { Product_Qty: 2, Total_Price: 32999*2, Updated_At: new Date() } };
  const updateUser = await db
    .collection("Carts")
    .updateMany(query, updatequery);
  console.log(updateUser.modifiedCount + " record updated");

  query = { User: "Sudeep" };
  const deleteUser = await db.collection("Carts").deleteMany(query);
  console.log(deleteUser.deletedCount + " record deleted");
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());