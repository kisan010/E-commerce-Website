import { getCartProductFromLS } from "./getCartProductFromLS";
import { toast } from "./toast";
import { updateCartValue } from "./updateCart";

export function removecartbtn(id)
{
    const productFromLs=getCartProductFromLS();
 const filterCartBtn= productFromLs.filter((item)=>{
    if(item.id!==id)
    {
        return item;
    }
  })
  console.log(filterCartBtn);
  localStorage.setItem('cartProductLS',JSON.stringify(filterCartBtn));
  document.getElementById(`card${id}`).remove();
  console.log(id);
  toast('remove',id);
  updateCartValue(productFromLs);
//   location.reload(); (alternative)


}