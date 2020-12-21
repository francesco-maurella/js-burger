// Vars definitions
var order = document.getElementsByClassName('order')[0];

var orderName = order.getElementsByTagName('input')[0];

var orderIngredients = order.getElementsByClassName('order-ingredients')[0];

var ingredient = orderIngredients.getElementsByTagName('input');

var submit = order.getElementsByTagName('button')[0];

var choice;

var coupon;

var totalPrice = document.getElementById('price');

// onClick operation
submit.addEventListener("click", function() {

  if (!orderName.value) {
    alert('Name your Burger, please!');
  } else {
    choice = 0;

    for (var i = 0; i < ingredient.length; i++) {
      if (ingredient[i].checked) {
        choice += parseInt(ingredient[i].value);
      }
    }

    coupon = document.getElementById('coupon').value;

    if (coupon === 'M2ERRY0CHR2ISTM0AS') {
      coupon = choice * 20 / 100;
      choice = choice - coupon;
    }

    totalPrice.innerText = choice;


  }
}
);
