import { ProductModel } from "./productModel";

export class ProductListView{
    private model: ProductModel

    constructor(model: ProductModel){
        this.model = model;
    }

    // shouldnt use console.log
    // should format the content for the controller
    // change format to string representation??
    // then have controller display it with console.log
    // get a current view of the users shopping cart
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