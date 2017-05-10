var SandwichMaker = (function(Oldmaker) {

  // Private variable to store the different meat prices
  var breadPrices = {
  		white: 1.50,
  		wheat: 1.50,
  		rye: 3.00,
  		pumpernickel: 3.00,
      none: 0
  }

  // Augment the original object with another method
  Oldmaker.addBread = function(bread) {
    console.log(bread);
    return breadPrices[bread];
  };

  // Return the new, augmented object with the new method on it
  return Oldmaker;
})(SandwichMaker);