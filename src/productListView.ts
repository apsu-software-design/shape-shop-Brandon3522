import { ProductModel } from "./productModel";

export class ProductListView{
    private model: ProductModel

    constructor(model: ProductModel){
        this.model = model;
    }

    public getView(): string {
        let cart = this.model.getShoppingCart();
        let quanity = this.model.getQuanity();
        let view = "";
        for (var i = 0; i < cart.length; i++){ // loop through cart, format information into string
            view = "" + 
            "       Name: " + cart[i].getName()
            + "\n" + "      Price: "+ cart[i].getPrice()
            + "\n" + "Description: "+ cart[i].getDescription()
            + "\n" + "   Quantity: "+ quanity[i];
        }

        return view;
    }
}