var MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "E_commerce";

const data = [
  {
    Name: "MI 11X 5G",
    Thumbnail: "http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    Product_Gallery: ["http://dummyimage.com/124x100.png/5fa2dd/ffffff", "http://dummyimage.com/124x100.png/5fa2dd/000000"],
    Description: "Brand new mobile.",
    Base_Price: 34999,
    Sell_Price: 26999,
    Category_Name: "Mobile",
    Tags: ["Best seller", "Free delivery"],
    Additional_Information: "",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Redmi 126cm 4K Ultra HD Android Smart LED TV",
    Thumbnail: "http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    Product_Gallery: ["http://dummyimage.com/124x100.png/5fa2dd/ffffff", "http://dummyimage.com/124x100.png/5fa2dd/000000"],
    Description: "Android Smart LED TV",
    Base_Price: 44999,
    Sell_Price: 32999,
    Category_Name: "TV",
    Tags: ["Never before price", "Free delivery"],
    Additional_Information: "Worth buying",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Amazfit GTS2 Mini Smart Watch",
    Thumbnail: "http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    Product_Gallery: ["http://dummyimage.com/124x100.png/5fa2dd/ffffff", "http://dummyimage.com/124x100.png/5fa2dd/000000"],
    Description: "The best smart watch",
    Base_Price: 9999,
    Sell_Price: 5999,
    Category_Name: "Watches",
    Tags: ["Lowest ever price", "Free delivery"],
    Additional_Information: "",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Acer Nitro 5 11th Gen Intel Core i5-11400H 15.6-inch Gaming Laptop",
    Thumbnail: "http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    Product_Gallery: ["http://dummyimage.com/124x100.png/5fa2dd/ffffff", "http://dummyimage.com/124x100.png/5fa2dd/000000"],
    Description: "The HD Gaming Laptop for game lovers.",
    Base_Price: 100000,
    Sell_Price: 69990,
    Category_Name: "Laptop",
    Tags: ["Lowest ever price", "Free delivery", "Best Seller"],
    Additional_Information: "",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Pigeon Special Stainless Steel Conical Casserole 3 Set",
    Thumbnail: "http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    Product_Gallery: ["http://dummyimage.com/124x100.png/5fa2dd/ffffff", "http://dummyimage.com/124x100.png/5fa2dd/000000"],
    Description: "Best Cookware sets for your kitchen.",
    Base_Price: 2045,
    Sell_Price: 949,
    Category_Name: "Cookware",
    Tags: ["Free delivery", "Best Seller"],
    Additional_Information: "",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Tealight Candles",
    Thumbnail: "http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    Product_Gallery: ["http://dummyimage.com/124x100.png/5fa2dd/ffffff", "http://dummyimage.com/124x100.png/5fa2dd/000000"],
    Description: "Devine candles",
    Base_Price: 599,
    Sell_Price: 229,
    Category_Name: "Home Decor Range",
    Tags: ["Free delivery", "Best Seller"],
    Additional_Information: "",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Diwali chocolate gift pack",
    Thumbnail: "http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    Product_Gallery: ["http://dummyimage.com/124x100.png/5fa2dd/ffffff", "http://dummyimage.com/124x100.png/5fa2dd/000000"],
    Description: "Chocolate for Diwali",
    Base_Price: 800,
    Sell_Price: 499,
    Category_Name: "Gifting",
    Tags: ["Best Seller"],
    Additional_Information: "",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Bean Bag XXL",
    Thumbnail: "http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    Product_Gallery: ["http://dummyimage.com/124x100.png/5fa2dd/ffffff", "http://dummyimage.com/124x100.png/5fa2dd/000000"],
    Description: "Relax with bean bag",
    Base_Price: 3599,
    Sell_Price: 1495,
    Category_Name: "Furniture",
    Tags: ["Free delivery", "Best Seller"],
    Additional_Information: "",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "LED Prime inverter light 9W",
    Thumbnail: "http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    Product_Gallery: ["http://dummyimage.com/124x100.png/5fa2dd/ffffff", "http://dummyimage.com/124x100.png/5fa2dd/000000"],
    Description: "Emergency light",
    Base_Price: 499,
    Sell_Price: 399,
    Category_Name: "Lighting",
    Tags: ["Free delivery", "Best Seller"],
    Additional_Information: "",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Puma shoes",
    Thumbnail: "http://dummyimage.com/124x100.png/5fa2dd/ffffff",
    Product_Gallery: ["http://dummyimage.com/124x100.png/5fa2dd/ffffff", "http://dummyimage.com/124x100.png/5fa2dd/000000"],
    Description: "Walk with comfort",
    Base_Price: 3999,
    Sell_Price: 1199,
    Category_Name: "Clothing",
    Tags: ["Free delivery", "Best Seller", "Never before price"],
    Additional_Information: "",
    Created_At: new Date(),
    Updated_At: new Date()
  },
];

async function main() {
  let query;
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);

  const insertData = await db.collection("Products").insertMany(data);
  console.log(insertData.insertedCount + "record inserted");

  const getProducts = await db.collection("Products").find().toArray();
  console.log(getProducts);
  
  query = { Name: "Diwali chocolate gift pack" };
  const updatequery = { $set: { Sell_Price: 599, Updated_At: new Date() } };
  const updateUser = await db
    .collection("Products")
    .updateMany(query, updatequery);
  console.log(updateUser.modifiedCount + " record updated");

  query = { Name: "Puma shoes" };
  const deleteUser = await db.collection("Products").deleteMany(query);
  console.log(deleteUser.deletedCount + " record deleted");
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());