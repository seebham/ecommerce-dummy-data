const fs = require("fs");
const { categories, products } = require("./data");

// Concatenating categories and products
let data = { categories: categories, products: products };

// Converting JS Object to JSON
let dataInJSON = JSON.stringify(data, null, 4);

// Writing data in JSON format to data.json
fs.writeFile("./data.json", dataInJSON, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Success!");
});
