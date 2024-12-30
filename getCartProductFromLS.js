import { updateCartValue } from "./updateCart.js";

 export function getCartProductFromLS()
{
 let cartProducts=localStorage.getItem('cartProductLS');
 if(!cartProducts)
 {
    return [];
 }
 cartProducts=JSON.parse(cartProducts);
 updateCartValue(cartProducts);
 return cartProducts;
}