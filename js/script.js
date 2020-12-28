// Order-name input - var definition
var orderName = document.getElementsByClassName('order-name')[0].getElementsByTagName('input')[0];

// Order-ingredients inputs - var definition
var orderIngredients = document.getElementsByClassName('order-ingredients')[0].getElementsByTagName('input');

// Coupons array - var definition
var coupons = ['JhLIv3HZ', '9M1rEw9u', '2RnQlJL7', 'ZtxB1Ile'];

// Submit button input - var definition
var submit = document.getElementsByClassName('order-submit')[0].getElementsByTagName('input')[0];

// Footer containers - vars definition
var user = document.getElementById('user');
var totalPrice = document.getElementById('price');

// Undefined vars - use them in the "Button after-click function"
var checked;
var coupon;
var price;
var discount;

// Button after-click function
submit.addEventListener("click", function() {
  // assign here value at Undefined vars, for reset them after every click
  checked = [];
  price = 0;

  // checked ingredients
  for (var i = 0; i < orderIngredients.length; i++) {
    if (orderIngredients[i].checked) {
      // if orderIngredients is .checked, pushing its value into "checked" array
      checked.push(orderIngredients[i].value);
      // sum ingredients checked values
      price += parseInt(orderIngredients[i].value);
    }
  }
  // order name verification
  if (!orderName.value) {
    alert('Name your Burger, please!');
  // ingredients quantity verification (2 or more)
  } else if (checked.length < 2) {
    alert('Choose 2 or more ingredients');
  } else {

    /* ----- Alternative method to sum ingredients, using array -----
    for (var i = 0; i < checked.length; i++) {
    choice += parseInt(checked[i]); }
    ----------------------------------------------------------------*/

    // assign here coupon value for refresh it, after every click
    coupon = document.getElementById('coupon').value;

    // verify coupon code
    if (coupons.includes(coupon))
    // if (coupons.indexOf(coupon) !== -1)   --- Alternative method ---
     {
      discount = 8 + price - (price * 20 / 100);
      // print discounted price
      totalPrice.innerHTML = 'Eur.' + '<small><s> ' + parseInt(8 + price) + '</s>  (-20%)</small> ' + discount;
    } else {
      // print normal price
      totalPrice.innerText = 'Eur.' + parseInt(8 + price);
    }

    // print order name
    user.innerHTML = '#' + orderName.value + '<small> price</small>';
  }
}
);
