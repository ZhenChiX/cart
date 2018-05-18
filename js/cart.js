'use strict';

var Cart = [];
var xArray = [];
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.

var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  Cart = JSON.parse(localStorage.getItem('cart')) || []; //objects are loaded   done
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart  //done
function showCart() {

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart



  var teEl = document.getElementById('cart');  //
 // var trEl = document.createElement('tr'); //creates a table row
  

  // teEl.appendChild(trEl);
  for (var i in Cart) {
   var trEl = document.createElement('tr')//makes new row for each object


    var tdEl = document.createElement('td');
    tdEl.textContent = '    x';
    trEl.appendChild(tdEl);
xArray.push(i);


    var tdEl = document.createElement('td');
    tdEl.textContent = Cart[i].quantity;
    trEl.appendChild(tdEl);

    var tdEl = document.createElement('td');
    tdEl.textContent = Cart[i].selectItem;
    trEl.appendChild(tdEl);

   
    teEl.appendChild(trEl);
  
  };
 var divEl = document.getElementById('cartContents');
  var tbEL = document.createElement('table');
  
  var trEl = document.createElement('tr'); //creates a table row
  for (var i in chosenItems) {
 
    trEl.textContent = chosenItems[i];//old

    var tdEl = document.createElement('td'); //new
    tdEl.textContent = cartItems[i].quantity;
    trEl.appendChild(tdEl);
  }
  // trEl.textContent = chosenItems[0];
  tbEL.append(trEl);
  divEl.append(tbEL);



  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

};

function removeItemFromCart(event) {  //this is the handler for the delete event
var deleteSelect = document.getSelection;

  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  

}

// This will initialize the page and draw the cart on screen
renderCart();