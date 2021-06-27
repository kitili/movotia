$(document).ready(function() {
    $("#text-center").submit(function(event) {
        function flavor() {
            (document).ready(function() {
                var pizzaNumber = document.getElementById("quantity").value;
                return parseInt(pizzaNumber);
            })

            function Order(flavor, size, crust, topping, quantity) {
                this.newFlavor = flavor;
                this.newSize = size;
                this.newCrust = crust;
                this.newTopping = topping;
                this.newQuantity = quantity;
            }

            var userInput = new Order(flavor(), size(), crust(), topping(), number());
            var totalCost =
                userInput.newSize +
                userInput.newCrust +
                userInput.newTopping +
                userInput.newFlavor *
                userInput.newQuantity;
            alert("Your charges for Pizza" + totalCost);
            prompt("enter your email address");
            prompt("enter your phone number");
            prompt("enter your location");
            alert("Your pizza will be delivered");
            $("#text-center").reset();
            event.preventDefault();
        }

    });
});