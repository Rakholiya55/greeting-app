// app.js
function greet(name) {
  if (!name) {
    throw new Error("name cannot be empty");
  }
  return `Hello, ${name}!`;
}

console.log(greet("World"));

module.exports = { greet };
