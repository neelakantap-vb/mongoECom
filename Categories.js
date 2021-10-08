var MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "E_commerce";

const data = [
  {
    Name: "Mobile",
    Slug: "mobile",
    Image: "http://dummyimage.com/209x100.png/dddddd/000000",
    Description: "A mobile phone, cellular phone, cell phone, cellphone, handphone, or hand phone, sometimes shortened to simply mobile, cell or just phone, is a portable telephone that can make and receive calls over a radio frequency link while the user is moving within a telephone service area.",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Computer",
    Slug: "computer",
    Image: "http://dummyimage.com/209x100.png/dddddd/000000",
    Description: "A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations automatically. Modern computers can perform generic sets of operations known as programs.",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Headphones",
    Slug: "headphones",
    Image: "http://dummyimage.com/209x100.png/dddddd/000000",
    Description: "Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears.",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Cameras",
    Slug: "cameras",
    Image: "http://dummyimage.com/209x100.png/dddddd/000000",
    Description: "A camera is an optical instrument that captures a visual image.",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Cookware",
    Slug: "cookware",
    Image: "http://dummyimage.com/209x100.png/dddddd/000000",
    Description: "Cookware and bakeware is food preparation equipment, such as cooking pots, pans, baking sheets etc.",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Home Decor Range",
    Slug: "home-decor-range",
    Image: "http://dummyimage.com/209x100.png/dddddd/000000",
    Description: "Home Decor Range are the products used for home decorations.",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Furniture",
    Slug: "furniture",
    Image: "http://dummyimage.com/209x100.png/dddddd/000000",
    Description: "Furniture consists of large objects such as tables, chairs, or beds that are used in a room for sitting or lying on or for putting things on or in.",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Lighting",
    Slug: "lighting",
    Image: "http://dummyimage.com/209x100.png/dddddd/000000",
    Description: "Lighting or illumination is the deliberate use of light to achieve practical or aesthetic effects.",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Gifting",
    Slug: "gifting",
    Image: "http://dummyimage.com/209x100.png/dddddd/000000",
    Description: "A gift is an offering of money or assets made by one person to another in which nothing of comparable value is given, or expected to be given, in return.",
    Created_At: new Date(),
    Updated_At: new Date()
  },
  {
    Name: "Clothing",
    Slug: "clothing",
    Image: "http://dummyimage.com/209x100.png/dddddd/000000",
    Description: "Clothing (also known as clothes, apparel, and attire) are items worn on the body.",
    Created_At: new Date(),
    Updated_At: new Date()
  },
];

async function main() {
  let query;
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);

  const insertData = await db.collection("Categories").insertMany(data);
  console.log(insertData.insertedCount + "record inserted");

  const getCategories = await db.collection("Categories").find().toArray();
  console.log(getCategories);
  
  query = { Name: "Mobile" };
  const updatequery = { $set: { Name: "Mobile Phone", Slug: "mobile-phone", Updated_At: new Date() } };
  const updateUser = await db
    .collection("Categories")
    .updateMany(query, updatequery);
  console.log(updateUser.modifiedCount + " record updated");

  query = { Name: "Headphones" };
  const deleteUser = await db.collection("Categories").deleteMany(query);
  console.log(deleteUser.deletedCount + " record deleted");
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());