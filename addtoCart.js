import { getCartProductFromLS } from "./getCartProductFromLS.js";
import { toast } from "./toast.js";
import { updateCartValue } from "./updateCart.js";

getCartProductFromLS();


export function addtoCart(e, id, stock) {
    let arrLocalStorageProduct = getCartProductFromLS();
    const CurrentProduct = document.getElementById(`card${id}`);
    console.log(CurrentProduct);
    let quantity = CurrentProduct.querySelector('.productQuantity').innerText;
    let price = CurrentProduct.querySelector('.productPrice').innerText;
    console.log(quantity, price);

    price = price.replace('₹', '');

    let exisitngProd = arrLocalStorageProduct.find((curProd) => {
        return curProd.id === id
    })
    console.log(exisitngProd);
    if (exisitngProd && quantity > 1) {
        quantity = Number(exisitngProd.quantity) + Number(quantity);
        price =  (price*quantity);
          price=Number(price.toFixed(2))
        console.log(price);
        // toFixed(price * quantity);
        let updatedCart = { id, quantity, price };
        updatedCart = arrLocalStorageProduct.map((curProd) => {
            return curProd.id === id ? updatedCart : curProd;
        })
        console.log(updatedCart);
        localStorage.setItem('cartProductLS', JSON.stringify(updatedCart));
    }
    if (exisitngProd) {
        return false;
    }




    price = (price * quantity);
    price=Number(price.toFixed(2));
    quantity = Number(quantity);
    console.log(quantity, price)

    let updateCart = { id, quantity, price };
    arrLocalStorageProduct.push(updateCart);
    localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorageProduct));
    toast("add",id)


    updateCartValue(arrLocalStorageProduct);

}