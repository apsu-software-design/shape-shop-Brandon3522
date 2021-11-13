"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveProductView = void 0;
var RemoveProductView = /** @class */ (function () {
    function RemoveProductView(model) {
        this.model = model;
    }
    RemoveProductView.prototype.getView = function () {
        var cart = this.model.getShoppingCart();
        var quanity = this.model.getQuanity();
        var view = "";
        for (var i = 0; i < cart.length; i++) {
            view = i + ": " + cart[i].getName();
        }
        return view;
    };
    return RemoveProductView;
}());
exports.RemoveProductView = RemoveProductView;
