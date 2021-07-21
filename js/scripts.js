//Business Logic for Pizza-----

function PizzaOrder(size, topping, secondtopping) {
  this.size = size;
  this.topping = topping;
  this.secondtopping = secondtopping;
  this.price = 0;
}


PizzaOrder.prototype.sizePrice = function() {
  if (this.size === "small"){
    this.price += 2;
  } else if (this.size === "medium"){
    this.price += 3;
  } else if (this.size === "large"){
    this.price += 4;
  }
  if (this.secondtopping === "none"){
    this.price += 1;
  } else this.price += 2;
};


// User Interface Logic--


$(document).ready(function() {
  $('form#pizza').submit(function(event) {
    event.preventDefault();
    const inputtedSize = $("#size").val();
    const inputtedTopping = $("#topping-one").val();
    const inputtedToppingTwo = $("#topping-two").val();
    let newPizza = new PizzaOrder(inputtedSize, inputtedTopping, inputtedToppingTwo);
    newPizza.sizePrice();


    $("#price").text(newPizza.price);
    $("#result").show();
  });
})