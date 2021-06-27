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
//         };

function getSizeValue() {
    var selectedValue = document.getElementById("size").value;
    return parseInt(selectedValue);
}

function getCrust() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}

function getToppings() {
    var selectedToppings = document.getElementById("toppings").value;
    return parseInt(selectedToppings);
}

function getflavour() {
    var selectedflavour = document.getElementById("flavour").value;
    return parseInt(selectedflavour);
}

function getQuantity() {
    var selectedQuantity = document.getElementById("quan").value;
    return parseInt(selectedQuantity);
}

function getTotalAmount() {
    var totalAmount = (getSizeValue() + getCrust() + getToppings()) * getQuantity();
    alert("You have Ordered" + getQuantity("") + " pizza." + "" + " The Total Amount is kshs " + (totalAmount) + "" + " Thank you for your order welcome again.");
    prompt("enter your location")
    alert("You delivery fee is 150/=")
    alert("You order will be delivered shortly")
    alert("Continue shoppping with us each and every time .")
}