import { addtoCart } from "./addtoCart.js";
import { homequantityToggle } from "./quantityToggle.js";

const productCOntainer = document.getElementById('product_container');
const productTemplate = document.getElementById('productTemplate');




function showProductContainer(products) {
  if (!products) {
    return false;
  }
  else {
    products.forEach(element => {
      console.log(element);
      const { id, name, image, category, description, price, stock } = element;
      const productClone = document.importNode(productTemplate.content, true);
      productClone.querySelector('#cardValue').setAttribute('id', `card${id}`);
      productClone.querySelector('.productName').textContent = name;
      productClone.querySelector('.category').textContent = category;
      productClone.querySelector('.productImage').src = image;
      productClone.querySelector('.productStock').textContent = stock;
      productClone.querySelector('.productDescription').textContent = description;
      productClone.querySelector('.productPrice').textContent = `₹${price}`;
      productClone.querySelector('.productActualPrice').textContent = `₹${price * 4}`;
       //event delegation/propagation
      productClone.querySelector('.stockElement').addEventListener("click", (e) => {
        console.log(e);
        homequantityToggle(e, id, stock)
      });
      productClone.querySelector('.addtoCart').addEventListener('click', (e) => {
        addtoCart(e, id, stock);
      })
      productCOntainer.appendChild(productClone);

    });
  }


}

export default showProductContainer;