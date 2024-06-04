function prodBill(custname) {
    var products = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        products[_i - 1] = arguments[_i];
    }
    var totalprice = products.reduce(function (total, price) { return total + price; }, 0);
    console.log("Customer name: ".concat(custname, ", Total Price: $").concat(totalprice.toFixed(2)));
}
prodBill('John doe', 19.99, 29.99, 49.99);
prodBill('John smith', 5.99, 15.49, 3.75);
