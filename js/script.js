// Vars definitions
var order = document.getElementsByClassName('order')[0];

var orderName = order.getElementsByTagName('input')[0];

var orderIngredients = order.getElementsByClassName('order-ingredients')[0];

var ingredient = orderIngredients.getElementsByTagName('input');

var submit = order.getElementsByTagName('button')[0];

var totalPrice = document.getElementById('price');

// Undefined Vars - use them in the "Button after-click function"
var choice;

var checked;

var coupon;

// Button after-click function
submit.addEventListener("click", function() {
  // assign value at Undefined vars, for reset them after every click
  checked = [];
  choice = 0;

  // checked ingredients
  for (var i = 0; i < ingredient.length; i++) {
    if (ingredient[i].checked) {
      // if ingredient is .checked, pushing its value into "checked" array
      checked.push(ingredient[i].value);
      // sum ingredients checked values
      choice += parseInt(ingredient[i].value);
    }
  }
  // verify IF the order has a name
  if (!orderName.value) {
    alert('Name your Burger, please!');
  // verify IF ingredients are 2 or more
  } else if (checked.length < 2) {
    alert('Choose 2 or more ingredients');
  } else {

    /* ----- alternative method to sum ingredients, using array -----
    for (var i = 0; i < checked.length; i++) {
    choice += parseInt(checked[i]); }
    ----------------------------------------------------------------*/

    // assign coupon var value here, for refresh it, after every click
    coupon = document.getElementById('coupon');
    // verify coupon code
    if (coupon.value === 'M2ERRY0CHR2ISTM0AS') {
      choice = choice - (choice * 20 / 100);
    }

    // print the result
    totalPrice.innerText = 'Eur.' + parseInt(8 + choice);
  }
}
);
