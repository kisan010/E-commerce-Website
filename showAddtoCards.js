import products from  './api/products.json';
import { fetchQuantityFromCartLS } from './fetchQuantityFromLs.js';
import { Finalvalue } from './FinalEvalution.js';
import {getCartProductFromLS} from './getCartProductFromLS.js'
import { incrementDecrement } from './IncrementDecrement.js';
import { removecartbtn } from './removeCartButton.js';



let cartProducts=getCartProductFromLS();
console.log(cartProducts);      
let filterProducts=products.filter((curprod)=>{
     console.log(curprod.id)
   return  cartProducts.some((curelem)=> curelem.id === curprod.id )
   
})

console.log(filterProducts);



//to update the addToCart Page
const cartElement=document.querySelector('#productCartContainer');
const templateContainer=document.querySelector('#productCartTemplate');

const showCartProduct=()=>{
   
    filterProducts.forEach((curProd)=>{
        console.log(curProd);
        const {category,id,image,name,price,stock}= curProd;
        let ProductClone=document.importNode(templateContainer.content,true);
        ProductClone.querySelector('.cards').setAttribute('id',`card${id}`)
        ProductClone.querySelector('.category').textContent=category;
        ProductClone.querySelector('.productName').textContent=name;
        ProductClone.querySelector('.productImage').src=image;

        const priceAndQuantity=fetchQuantityFromCartLS(id,price);
        ProductClone.querySelector('.productPrice').textContent=priceAndQuantity.price;
        ProductClone.querySelector('.productQuantity').textContent=priceAndQuantity.quantity

        ProductClone.querySelector('.stockElement').addEventListener("click",function(e)
    {
        console.log(id,price,stock);
        incrementDecrement(e,price,stock,id)
    })



        ProductClone.querySelector('.remove-to-cart-button').addEventListener('click',(e)=>{
                removecartbtn(id);
        })
        cartElement.appendChild(ProductClone);

    })
  
    
}
showCartProduct();
Finalvalue();



 



