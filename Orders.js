var MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "E_commerce";

const data = [
  {
    User_Id: 1,
    Total_Items: 2,
    Products: [{Product: "MI 11X 5G", Qty: 2}],
    Billing_Address: "#1 1st cross, Abc Layout, Bangalore",
    Shipping_Address: "#1 1st cross, Abc Layout, Bangalore",
    Transaction_Status: "confirmed",
    Payment_Mode: "cash",
    Payment_Status: "pending",
    Order_Status: "dispatched",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    User_Id: 2,
    Total_Items: 3,
    Products: [{Product: "MI 11X 5G", Qty: 2}, 
               {Product: "Redmi 126cm 4K Ultra HD Android Smart LED TV", Qty: 1}],
    Billing_Address: "#2 1st cross, Abc Layout, Bangalore",
    Shipping_Address: "#2 1st cross, Abc Layout, Bangalore",
    Transaction_Status: "confirmed",
    Payment_Mode:"debit card",
    Payment_Status:"success",
    Order_Status:"delivered",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    User_Id: 3,
    Total_Items: 2,
    Products: [{Product: "Redmi 126cm 4K Ultra HD Android Smart LED TV", Qty: 1},
               {Product: "Amazfit GTS2 Mini Smart Watch", Qty: 1}],
    Billing_Address: "#3 1st cross, Abc Layout, Bangalore",
    Shipping_Address: "#3 1st cross, Abc Layout, Bangalore",
    Transaction_Status: "confirmed",
    Payment_Mode:"credit card",
    Payment_Status:"success",
    Order_Status:"dispatched",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    User_Id: 4,
    Total_Items: 1,
    Products: [{Product:"Amazfit GTS2 Mini Smart Watch", Qty:1}],
    Billing_Address: "#4 1st cross, Abc Layout, Bangalore",
    Shipping_Address: "#4 1st cross, Abc Layout, Bangalore",
    Transaction_Status: "confirmed",
    Payment_Mode:"UPI",
    Payment_Status:"success",
    Order_Status:"ordered",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    User_Id: 5,
    Total_Items: 4,
    Products: [{Product: "MI 11X 5G", Qty: 1},
               {Product: "Acer Nitro 5 11th Gen Intel Core i5-11400H 15.6-inch Gaming Laptop", Qty: 1},
               {Product: "Bean Bag XXL", Qty: 2}],
    Billing_Address: "#5 1st cross, Abc Layout, Bangalore",
    Shipping_Address: "#5 1st cross, Abc Layout, Bangalore",
    Transaction_Status: "confirmed",
    Payment_Mode:"UPI",
    Payment_Status:"success",
    Order_Status:"delivered",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    User_Id: 6,
    Total_Items: 9,
    Products: [{Product: "MI 11X 5G", Qty: 2},
               {Product: "Tealight Candles", Qty: 5},
               {Product: "Diwali chocolate gift pack", Qty: 2}],
    Billing_Address: "#6 1st cross, Abc Layout, Bangalore",
    Shipping_Address: "#6 1st cross, Abc Layout, Bangalore",
    Transaction_Status: "pending",
    Payment_Mode:"net banking",
    Payment_Status:"pending",
    Order_Status:"pending",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    User_Id: 7,
    Total_Items: 5,
    Products: [{Product: "Acer Nitro 5 11th Gen Intel Core i5-11400H 15.6-inch Gaming Laptop", Qty: 5}],
    Billing_Address: "#7 1st cross, Abc Layout, Bangalore",
    Shipping_Address: "#7 1st cross, Abc Layout, Bangalore",
    Transaction_Status: "rejected",
    Payment_Mode:"cash",
    Payment_Status:"pending",
    Order_Status:"cancled",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    User_Id: 8,
    Total_Items: 6,
    Products: [{Product: "MI 11X 5G", Qty: 2},
               {Product: "LED Prime inverter light 9W", Qty: 4}],
    Billing_Address: "#8 1st cross, Abc Layout, Bangalore",
    Shipping_Address: "#8 1st cross, Abc Layout, Bangalore",
    Transaction_Status: "confirmed",
    Payment_Mode:"debit card",
    Payment_Status:"success",
    Order_Status:"ordered",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    User_Id: 9,
    Total_Items: 2,
    Products: [{Product: "Pigeon Special Stainless Steel Conical Casserole 3 Set", Qty: 1},
               {Product: "Diwali chocolate gift pack", Qty: 1}],
    Billing_Address: "#9 1st cross, Abc Layout, Bangalore",
    Shipping_Address: "#9 1st cross, Abc Layout, Bangalore",
    Transaction_Status: "confirmed",
    Payment_Mode:"debit card",
    Payment_Status:"success",
    Order_Status:"delivered",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    User_Id: 111,
    Total_Items: 100,
    Products: [{Product: "MI 11X 5G", Qty: 50},
               {Product: "Acer Nitro 5 11th Gen Intel Core i5-11400H 15.6-inch Gaming Laptop", Qty: 50}],
    Billing_Address: "#10 1st cross, Abc Layout, Bangalore",
    Shipping_Address: "#10 1st cross, Abc Layout, Bangalore",
    Transaction_Status: "rejected",
    Payment_Mode:"cash",
    Payment_Status:"pending",
    Order_Status:"cancled",
    Created_At: new Date(),
    Updated_At: new Date()
  },
];

async function main() {
  let query;
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);

  const insertData = await db.collection("Orders").insertMany(data);
  console.log(insertData.insertedCount + "record inserted");

  const getOrders = await db.collection("Orders").find().toArray();
  console.log(getOrders);
  
  query = { User_Id: 1};
  const updatequery = { $set: { Order_Status: "delivered", Updated_At: new Date() } };
  const updateUser = await db
    .collection("Orders")
    .updateMany(query, updatequery);
  console.log(updateUser.modifiedCount + " record updated");

  query = { User_Id: 111};
  const deleteUser = await db.collection("Orders").deleteMany(query);
  console.log(deleteUser.deletedCount + " record deleted");
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());