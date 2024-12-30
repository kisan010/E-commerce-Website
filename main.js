// import './style.css'
import products from './api/products.json'

import showProductContainer from './HomeProductsCards.js';

console.log(products);
console.log(window.innerWidth);
console.log(window.innerHeight)

showProductContainer(products);