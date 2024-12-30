import { Finalvalue } from "./FinalEvalution";
import { getCartProductFromLS } from "./getCartProductFromLS";

export function incrementDecrement(e, price, stock, id) {
    const cardElement = document.getElementById(`card${id}`);
    let Product_quantity = cardElement.querySelector('.productQuantity');
    let Product_price = cardElement.querySelector('.productPrice');
    console.log(Product_price);
    console.log(e);
    let quantity = 1;  
    let localStoragePrice = 0;
    let localStorageValue = getCartProductFromLS();
    console.log(localStorageValue);
    let exisitingProd = localStorageValue.find((CurrProdu) => CurrProdu.id === id);
    if (exisitingProd) {
        quantity = exisitingProd.quantity;
        localStoragePrice = exisitingProd.price;
        console.log(quantity, localStoragePrice);
    }
    else {
        localStoragePrice = price;
        price = price;
    }
  
    //Increment & decrement functionality

    if (e.target.className === 'cartIncrement') {
        if (quantity < stock) {
            quantity = quantity + 1;

        }
        else if (quantity === stock) {
            quantity = stock;
            localStoragePrice = price * stock;
        }
       
      

    }
    if (e.target.className === 'cartDecrement') {
        if (quantity > 1)
            quantity -= 1
        

    }
    console.log(quantity);
    localStoragePrice = price * quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2));
    let updatedCart = { id, quantity, price: localStoragePrice };
    console.log(updatedCart);
    updatedCart = localStorageValue.map((curProd) => {
        return curProd.id === id ? updatedCart : curProd;
    })
    localStorage.setItem('cartProductLS', JSON.stringify(updatedCart));
    Product_quantity.innerText = quantity;
    Product_price.innerText = localStoragePrice;
    Finalvalue()
}