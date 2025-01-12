const HeaderHtml=`  
    <div class="section_top">
      <p id="adv">Free shopping 30-day return or refund guarantee</p>
      <ul id="auth">
        <li>SIGN IN</li>
        <li>SIGN UP</li>
      </ul>
    </div>
    <div class="Navbar_section">
      <div class="logo">
        <a href="index.html">
        <img src="./images/dashimg.png">
      </a>
      </div>
      <ul class="_navbar_list">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="products.html">Products</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
        <li >
          <a href="addtoCart.html" id="cartValue">
            <i class="fa-solid fa-cart-shopping"> 0 </i>
          </a>
        </li>
      </ul>
    </div>
 `

  const headerElem=document.getElementById('Header_section');
  headerElem.insertAdjacentHTML("afterbegin",HeaderHtml)