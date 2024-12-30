import { getCartProductFromLS } from "./getCartProductFromLS";


export function Finalvalue()
{
let localStorageValue= getCartProductFromLS();
let total;
console.log(localStorageValue);
total=localStorageValue.reduce(function(prev,curr)
{
    let productPrice = parseInt(curr.price) || 0;
    return  prev + productPrice;
},0)
console.log(total);
let productSubTotal=document.querySelector('.productSubTotal');

let tax=document.querySelector('.Tax')
tax=Number(tax);

let FinalValue=document.querySelector('.productFinalTotal');
productSubTotal.innerText=total;
FinalValue.innerText=`₹${Number(total)+50}`;
}