import { getCartProductFromLS } from "./getCartProductFromLS";

export function fetchQuantityFromCartLS(id,price)
{
    let cartProducts=getCartProductFromLS();
   let exisitingProd= cartProducts.find((Lspro)=>{ return Lspro.id ===id});
   let quantity=1;
   if(exisitingProd){
    quantity=exisitingProd.quantity;
    price=exisitingProd.price;
   }
    return {price,quantity}
}