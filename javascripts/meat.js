

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(Oldmaker) {

  // Private variable to store the different meat prices
  var meatPrices = { turkey: 2.50, chicken: 2.50, bacon: 3.00, none: 0 }

  // Augment the original object with another method
  Oldmaker.addMeat = function(meat) {
    console.log(meat);
    return meatPrices[meat];
  };

  // Return the new, augmented object with the new method on it
  return Oldmaker;
})(SandwichMaker);