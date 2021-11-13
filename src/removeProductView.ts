import { ProductModel } from "./productModel";

export class RemoveProductView{
    private model: ProductModel;

    constructor(model: ProductModel){
        this.model = model;
    }

    public getView(): string{
        let cart = this.model.getShoppingCart();
        let quanity = this.model.getQuanity();
        let view = "";
        for (let i = 0; i < cart.length; i++) {
            view = i + ": " + cart[i].getName();            
        }

        return view;
    }
}