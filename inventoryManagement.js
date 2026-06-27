// Step 1: Create the products array
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Step 2: Log the first product
function logFirstProduct() {
  console.log(products[0]);
}

// Step 3: Add a new product
function addProduct(productName) {
  products.push(productName);
}

// Step 4: Update a product name
function updateProductName(index, newName) {
  products[index] = newName;
}

// Step 5: Remove the last product
function removeLastProduct() {
  products.pop();
}

// Export everything so tests can access them
module.exports = { products, logFirstProduct, addProduct, updateProductName, removeLastProduct };