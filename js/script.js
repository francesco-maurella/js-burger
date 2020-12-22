// Vars definitions
var order = document.getElementsByClassName('order')[0];

var orderName = order.getElementsByTagName('input')[0];

var orderIngredients = order.getElementsByClassName('order-ingredients')[0];

var ingredient = orderIngredients.getElementsByTagName('input');

var submit = order.getElementsByTagName('button')[0];

var totalPrice = document.getElementById('price');

// Undefined Vars for the "click" operation
var choice;

var checked;

var coupon;

// onClick operation
submit.addEventListener("click", function() {
  // Verify IF the order has a name
  if (!orderName.value) {
    alert('Name your Burger, please!');
  } else {
    // Assign value at Undefined vars
    checked = [];
    choice = 0;
    // Checked ingredients
    for (var i = 0; i < ingredient.length; i++) {
      if (ingredient[i].checked) {
        checked.push(ingredient[i].value); // count ingredients
        choice += parseInt(ingredient[i].value); // sum the ingredients value
      }
    }
    // Verify IF ingredients are 2 or more
    if (checked.length < 2) {
      alert('Choice 2 or more ingredients');
    } else {
      // for (var i = 0; i < checked.length; i++) {
      //   choice += parseInt(checked[i]);
      // }

      // Verify IF coupon have used
      coupon = document.getElementById('coupon');
      if (coupon.value === 'M2ERRY0CHR2ISTM0AS') {
        coupon = choice * 20 / 100;
        choice = choice - coupon;
      }
      // Print the result
      totalPrice.innerText = choice;
    }
  }
}
);
