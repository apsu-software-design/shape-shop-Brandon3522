"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductListView = void 0;
var ProductListView = /** @class */ (function () {
    function ProductListView(model) {
        this.model = model;
    }
    // shouldnt use console.log
    // should format the content for the controller
    // change format to string representation??
    // then have controller display it with console.log
    // get a current view of the users shopping cart
    ProductListView.prototype.getView = function () {
        var cart = this.model.getShoppingCart();
        var quanity = this.model.getQuanity();
        var view = "";
        for (var i = 0; i < cart.length; i++) { // loop through cart, format information into string
            view = "" +
                "       Name: " + cart[i].getName()
                + "\n" + "      Price: " + cart[i].getPrice()
                + "\n" + "Description: " + cart[i].getDescription()
                + "\n" + "   Quantity: " + quanity[i];
        }
        return view;
    };
    return ProductListView;
}());
exports.ProductListView = ProductListView;
