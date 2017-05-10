// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;
var price = 0;

// Get a reference to the <select> element that has all the meat options
var meat = document.getElementById("meat");
var cheese = document.getElementById("cheese");
var bread = document.getElementById("bread");
var condiments = document.getElementById("condiments");
var veggies = document.getElementById("veggies");
var final = document.getElementById('finalprice');

/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meat.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  console.log(event.target.value);
  // Determine the price of the topping chosen
  let price = SandwichMaker.addMeat(selectedTopping);
  console.log(price);
  // Add the topping to the SandwichMaker to increase the total price
  finalSandwichPrice += price;
});

bread.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  console.log(event.target.value);
  // Determine the price of the topping chosen
  let price = SandwichMaker.addBread(selectedTopping);
  console.log(price);

  // Add the topping to the SandwichMaker to increase the total price
  finalSandwichPrice += price;
});

cheese.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  console.log(event.target.value);
  // Determine the price of the topping chosen
  let price = SandwichMaker.addCheese(selectedTopping);
  console.log(price);
  // Add the topping to the SandwichMaker to increase the total price
  finalSandwichPrice += price;
});

veggies.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  console.log(event.target.value);
  // Determine the price of the topping chosen
  let price = SandwichMaker.addVeggies(selectedTopping);
  console.log(price);
  // Add the topping to the SandwichMaker to increase the total price
  finalSandwichPrice += price;
});

condiments.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  console.log(event.target.value);
  // Determine the price of the topping chosen
  let price = SandwichMaker.addCondiment(selectedTopping);
  console.log(price);
  // Add the topping to the SandwichMaker to increase the total price
  finalSandwichPrice += price;
});

var button = document.getElementById("button");

button.addEventListener("click", function(event){
  var final = document.getElementById("finalprice");
	final.innerHTML = finalSandwichPrice;

})






