var SandwichMaker = (function(Oldmaker) {

  // Private variable to store the different meat prices
  var cheesePrices = {
  		provolone: 2.50,
  		cheddar: 2.50,
  		swiss: 3.00,
  		jack: 4.00,
      none: 0
  }

  // Augment the original object with another method
  Oldmaker.addCheese = function(cheese) {

    return cheesePrices[cheese];
  };

  // Return the new, augmented object with the new method on it
  return Oldmaker;
})(SandwichMaker);