var order = document.getElementsByClassName('order')[0];

var orderName = order.getElementsByTagName('input')[0];

var orderIngredients = order.getElementsByClassName('order-ingredients')[0];

var ingredient = orderIngredients.getElementsByTagName('input');

var coupon = order.getElementsByTagName('input')[1];

var submit = order.getElementsByTagName('button')[0];

var choice = 0;

var totalPrice = document.getElementById('price');

submit.addEventListener("click", function() {
  if (!orderName.value) {
    alert('Name your Burger, please!');
  } else {
    for (var i = 0; i < ingredient.length; i++) {
      if (ingredient[i].checked) {
        choice += parseInt(ingredient[i].value);
      }
    }
    totalPrice.innerText = choice;
  }
}
);
