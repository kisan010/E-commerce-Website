
const cartvalue=document.getElementById('cartValue');
export function updateCartValue(Cartproducts)
{
    return (cartvalue.innerHTML=`<i class ="fa-solid fa-cart-shopping">${Cartproducts.length}</i>`);
}