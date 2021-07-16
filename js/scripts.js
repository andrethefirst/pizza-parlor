//Business Logic for Pizza-----

function PizzaOrder(size, topping, secondtopping) {
  this.size = size;
  this.topping = topping;
  this.secondtopping =secondtopping;
}

PizzaOrder.prototype.addSize = function(sizing) {
  sizing.id = this.sizePrice();
  this.size[sizing.id] = sizing;
};

PizzaOrder.prototype.sizePrice = function() {
  if (this.size === "small"){
    this.price + 2;
  } else if (this.size === "medium"){
    this.price + 3;
  } else if (this.size === "large"){
    this.price + 4;
  }
}

PizzaOrder.prototype.addToppingOne = function(firsttop) {
  firsttop.id = this.topOnePrice();
  this.topping[firsttop.id] = firsttop;
};

PizzaOrder.prototype.topOnePrice = function() {
  if (this.topping === "pepperoni"){
    this.price + 1;
  } else if (this.topping === "olives"){
    this.price + 1;
  } else if (this.topping === "pineapple"){
    this.price + 1;
  }
}

PizzaOrder.prototype.addToppingTwo = function(secondtop) {
  secondtop.id = this.topTwoPrice();
  this.secondtopping[secondtop.id] = secondtop;
};

PizzaOrder.prototype.topTwoPrice = function() {
  if (this.secondtopping === "pepperoni"){
    this.price + 1;
  } else if (this.secondtopping === "olives"){
    this.price + 1;
  } else if (this.secondtopping === "pineapple"){
    this.price + 1;
  }
}



// User Interface Logic--

let pizzaOrder = new PizzaOrder();







$(document).ready(function() {
  $('form#pizza').submit(function(event) {
    event.preventDefault();
    const inputtedSize = $("input#size").val();
    const inputtedTopping = $("input#topping-one").val();
    const inputtedToppingTwo = $("input#topping-two").val();


    let newPizza = new PizzaOrder(inputtedSize, inputtedTopping, inputtedToppingTwo);
    pizzaOrder.makePizza(newPizza);
  });
})