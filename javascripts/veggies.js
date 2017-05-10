// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(Oldmaker) {

  // Private variable to store the different meat prices
  var veggiePrices = { lettuce: .50, cucumbers: 0.80, none: 0 }

  // Augment the original object with another method
  Oldmaker.addVeggies = function(veg) {
    return veggiePrices[veg];
  };

  // Return the new, augmented object with the new method on it
  return Oldmaker;
})(SandwichMaker);