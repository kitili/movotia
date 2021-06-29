var price, crustPrice, total, tPrice, charge;
var delivery;

function Pizza(flavor, size, crust, toppings, orders) {
    this.Flavor = flavor;
    this.Size = size;
    this.Crust = crust;
    this.Toppings = toppings;
    this.Orders = orders;
}

function Delivery(number, location) {
    this.Number = number;
    this.Location = location;
}
Delivery.prototype.info = function() {
    return this.Number + "  " + this.Location;
}
Pizza.prototype.customerChoice = function() {
    return this.Flavor + " " + this.Size + " " + this.Crust + " " + this.Toppings + " " + this.Orders;
}
$(document).ready(function() {
    $("button#btn").click(function(y) {
        y.preventDefault();
        var getFlavor = $("#flavor option:selected").val();
        var getSize = $("#size option:selected").val();
        var getCrust = $("#crust option:selected").val();
        var getToppings = $("#toppings option:selected").val();
        var getOrders = $("input#quantity").val();




        switch (getSize) {
            case "small":
                price = 300;
                tPrice = 150;
                console.log(price);
                console.log(tPrice);
                break;
            case "medium":
                price = 600;
                tPrice = 300;
                console.log(price);
                console.log(tPrice);
                break;
            case "large":
                price = 1600;
                tPrice = 650;
                console.log(price);
                console.log(tPrice);
                break;
            default:
                alert("choose the correct size of your pizza")
        }
        switch (getCrust) {
            case "crispy":
                crustPrice = 150;
                console.log(crustPrice);
                break;
            case "gluttenfree":
                CrustPrice = 200;
                console.log(crustPrice);
                break;
            case "stuffed":
                crustPrice = 345;
                console.log(crustPrice);
                break;
            default:
                alert("choose correct crust")
        }
        total = price + crustPrice + tPrice;

        var newOrder = new Pizza(getFlavor, getSize, getCrust, getToppings, getOrders);

        if (getOrders === 0) {
            charge = (getOrders + 1) * total;
        } else if (getOrders < 0) {
            alert("enter a positive number for your orders")
        } else {
            charge = getOrders * total;
        }
        $("#looks").append(newOrder.Flavor);
        $("#looksy").append(newOrder.Size);
        $("#look").append(newOrder.Crust);
        $("#loo").append(newOrder.Toppings);
        $("#lo").append(newOrder.Orders);
        $("#lobs").append(charge);
        $("input#quantity").val("");






    });
});
$(document).ready(function() {
    $("button#lit").click(function(y) {
        y.preventDefault();
        $("#cards").show();

    });
});
$(document).ready(function() {
    $("button#checkout").click(function(y) {
        y.preventDefault();
        $("#yes").show();

        var contact = $("input#contact").val();
        var location = $("input#place").val();

        delivery = charge + 200;

        alert(`hi ${contact} your order below will be delivered to ${location}`)
    });

});