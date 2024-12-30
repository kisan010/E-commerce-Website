export function toast(Operation,id)
{
    let newElement=document.createElement('div');
    newElement.classList.add("popUp");
    if(Operation==="add")
    {
newElement.textContent=`added product with ID ${id}`
    }
    else if(Operation==="remove")
    {
           
           newElement.textContent=`remove product with ID ${id}`
    }
    document.body.appendChild(newElement);
    setTimeout(()=>{
        newElement.remove()
    },2000)
}