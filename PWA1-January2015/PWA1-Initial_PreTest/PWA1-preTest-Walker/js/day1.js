/*
 Debbie Walker
 Day 1 PWA1 Pre-test | 1/5/15
 */

alert ("Welcome to my Online Store!");

prompt("Please enter the cost of your item.");

var cost = prompt("Enter the cost of the item.");

while(cost === "" || isNaN(cost)){
 console.log("Please enter a number and do not leave blank.");
 cost = prompt("Enter the cost of the item.");
}

var discount = prompt("Enter the discount percent.");

if(discount > 100){
 prompt("The discount cannot be more than 100% of the value, or it would be free.\nPlease re-enter the discount percentage.");
}

while(cost === "" || isNaN(cost)) {
 console.log("Please enter a number and do not leave blank.");
 cost = prompt("Enter the cost of the item.");

var totalPrice = discountCost(cost, discount);
console.log("The original price was: " + Number(cost) + ", but with today's Black Friday discount of " + Number(discount).toFixed() + "%, you'll only have to pay $" + parseInt(Number(discountCost(cost, discount))) + ".\n\nThanks for shopping with us, have a happy holiday.");


function discountCost(cost, discount) {
 var discountPrice = (100 - discount) / 100 * cost;
 return discountPrice;
}