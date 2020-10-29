"use strict";

// Adds item to cart by name
const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};
// Empties items and sets total to $0.00
const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

// Increases the total of cart price after each item is added
const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

// Increases the quantity of coffee sold
const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

// Displays the order status
const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//

$('.add-to-order').on('click', () => {
  addItemToCart('Coffee');
  incrementCartTotal(1.50);
});

$('#place-order').on('click', () => {
  incrementCoffeeSold($('#cart-items').children().length);
  resetCart();
})
