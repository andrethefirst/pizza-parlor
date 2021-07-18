//Business Logic for Pizza-----

function PizzaOrder(size, topping, secondtopping) {
  this.size = size;
  this.topping = topping;
  this.secondtopping = secondtopping;
  this.price = 0;
}

PizzaOrder.prototype.findPizza = function(id) {
  if (this.pizzas[id] != undefined) {
    return this.pizzas[id];
  }
  return false;
};

PizzaOrder.prototype.addSize = function(sizing) {
  sizing.id = this.sizePrice();
  this.size[sizing.id] = sizing;
};

PizzaOrder.prototype.sizePrice = function() {
  if (this.size === "small"){
    this.price += 2;
  } else if (this.size === "medium"){
    this.price += 3;
  } else if (this.size === "large"){
    this.price += 4;
  }
};

PizzaOrder.prototype.addToppingOne = function(firsttop) {
  firsttop.id = this.topOnePrice();
  this.topping[firsttop.id] = firsttop;
};

PizzaOrder.prototype.topOnePrice = function() {
  if (this.topping === "pepperoni"){
    this.price += 1;
  } else if (this.topping === "olives"){
    this.price += 1;
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
  } else if (this.secondtopping === "none"){
    this.price + 0;
  }
}

PizzaOrder.prototype.pizzaPrice = function() {
  this.sizePrice + this.topOnePrice + this.topTwoPrice
}

// User Interface Logic--

let pizzaOrder = new PizzaOrder();

function displayPizza(pizzaToDisplay) {
  let pizzas = $("ul#finalorder");
  let htmlforPizzaInfo = "";
  Object.keys(pizzaToDisplay).forEach(function(key) {
    const pizzaOrders =pizzaToDisplay.findPizza(key)
    htmlforPizzaInfo += "<li id=" + pizzaOrders.id + ">" + pizzaOrders.size + " " + pizzaOrders.topping + " " + pizzaOrders.secondtopping + "</li>"
  });
  pizzas.html(htmlforPizzaInfo);
};

function showPizza(pizzaId) {
  const pizza = pizzaOrder.findPizza(pizzaId);
  $("#finalorder").show();
  $(".size").html(pizza.size);
  $(".topping-one").html(pizza.topping);
  $(".topping-two").html(pizza.secondtopping);
}


$(document).ready(function() {
  showPizza();
  $('form#pizza').submit(function(event) {
    event.preventDefault();
    const inputtedSize = $("input#size").val();
    const inputtedTopping = $("input#topping-one").val();
    const inputtedToppingTwo = $("input#topping-two").val();

    $("input#size").val("");
    $("input#topping-one").val("");
    $("input#topping-two").val("");


    let newPizza = new PizzaOrder(inputtedSize, inputtedTopping, inputtedToppingTwo);
    pizzaOrder.makePizza(newPizza);
    const finalPizza = displayPizza(pizzaOrder)

    $("#price").text(finalPizza);
    $("#result").show();
  });
})