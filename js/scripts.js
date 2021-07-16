//Business Logic for Pizza-----

function PizzaOrder(size, topping, secondtopping) {
  this.size = size;
  this.topping = topping;
  this.secondtopping =secondtopping;
}

PizzaOrder.prototype.chooseSize = function() {
  return this.size + " " + this.topping + " " +this.secondtopping;
};

