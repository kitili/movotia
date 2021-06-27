// $(document).ready(function() {
//             $("#text-center").submit(function(event) {
//                     function flavor() {
//                         (document).ready(function() {
//                             var pizzaNumber = document.getElementById("quantity").value;
//                             return parseInt(pizzaNumber);
//                         })

//                         class Order {
//                             constructor(flavor, size, crust, topping, quantity) {
//                                 this.newFlavor = flavor;
//                                 this.newSize = size;
//                                 this.newCrust = crust;
//                                 this.newTopping = topping;
//                                 this.newQuantity = quantity;
//                             }
//                         }
//                         var userInput = new Order(flavor(), size(), crust(), topping(), number());
//                         var totalCost =
//                             userInput.newSize +
//                             userInput.newCrust +
//                             userInput.newTopping +
//                             userInput.newFlavor *
//                             userInput.newQuantity;
//                         alert("Your charges for Pizza" + totalCost);
//                         prompt("enter your email address");
//                         prompt("enter your phone number");
//                         prompt("enter your location");
//                         alert("Your pizza will be delivered");
//                         $("#text-center").reset();
//                         event.preventDefault();
//                     });
//             });
function getSizeCost() {
    var selectedSize = document.getElementById("size").value;
    return parseInt(selectedSize);
    return parseInt(cheese);
}

function calctotalPrice() {
    function calctotalPrice(e) {
        event.preventDefault();
        var totalPrice = (getSizeCost() + getCrustCost() + mushrooms()) * (getNumber());

        console.log(totalPrice);
        alert("Your order of " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice + ".")

    }
    var location = $("input#location").val();

    alert("Hello " + name + ". Your order has been successfuly received and will be delivered to " + location + " within one hour.The delivery will cost ksh 180/= Thank you for chosing the pizzeria.");
    $(this).get(0).reset();
    event.preventDefault();
}