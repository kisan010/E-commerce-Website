const footerHTML=`
 
    <div class="container_4">
      <div class="box8">
        <img src="public/dash-logo@logotyp.us.svg" width="100px" height="auto">
        <p>Welcome to Dash EcomStore,Your ultimate destination cutting-edge gadgets!</p>
        <div style="margin-top:8px;">
          <img src="public/american express.png" width="40px" height="25px" alt="image not found">
          <img src="public/mastercard.png" width="40px" height="25px" alt="image not found">
          <img src="public/paypal.jpg" width="40px" height="25px" alt="image not found">
          <img src="public/Visa.png" width="40px" height="25px" alt="image not found">
        </div>
      </div>
      <div class="box9">
        <h4>Shopping</h4>
        <a href="#">Computer store</a>
        <a href="#">Laptop store</a>
        <a href="#">Accessories</a>
        <a href="#">Sales and Discount</a>
      </div>
      <div class="box10">
        <h4>Experience</h4>
        <a href="#">Contact Us</a>
        <a href="#">payment Method</a>
        <a href="#">Delivery</a>
        <a href="#">Return and Exchange</a>
      </div>
      <div class="box11">
        <h4>NEWSLETTER</h4>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur suscipit velit corrupti natus expedita et.</P>
        <form>
          <input type="email" name="email" placeholder="Enter Your email" id="email">
          <button>Subscribe</button>
        </form>
      </div>
    </div>
    <div class="Footer_base">
      <p>Design and Code by Dash Technical</p>
    </div>
    `
  const footerElem=document.querySelector('.Footer_section');
  footerElem.insertAdjacentHTML("afterbegin",footerHTML);
  