function searchFruit() {
  const fruits = ["Apple", "Orange", "Mango", "Banana"];
  const input = document.getElementById("txt").value;
  const result = fruits.find(fruit => fruit=== input);
  const output = document.getElementById("display");
  if (result) {
    output.innerHTML = `Found: ${result}`;
  } else {
    output.innerHTML = "Not Found";
  }
}