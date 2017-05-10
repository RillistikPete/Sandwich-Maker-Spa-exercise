var SandwichMaker = (function(Oldmaker) {

  // Private variable to store the different meat prices
  var condPrices = {
  		BBQ: .50,
  		ranch: .5,
      none: 0
  }

  // Augment the original object with another method
  Oldmaker.addCondiment = function(condiment) {
    return condPrices[condiment];
  };

  // Return the new, augmented object with the new method on it
  return Oldmaker;
})(SandwichMaker);