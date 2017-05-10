var SandwichMaker = (function(taco) {

  // Private variable to store the price
  var totalPrice = 0;

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
    }
  };

})();

console.log("SandwichMaker is ", SandwichMaker);