import './Footer.css'
export default function Footer(){
return(
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section categories">
          <h3>CATEGORIES</h3>
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Shoes</li>
            <li>Watches</li>
          </ul>
        </div>

        <div className="footer-section help">
          <h3>HELP</h3>
          <ul>
            <li>Track Order</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-section get-in-touch">
          <h3>GET IN TOUCH</h3>
          <p>
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
          </div>
        </div>

        <div className="footer-section newsletter">
          <h3>NEWSLETTER</h3>
          <div className="newsletter-subscribe">
            <input type="email" placeholder="Enter your email@example.com" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright ©2024 All rights reserved</p>
        <div className="payment-icons">
          <img src="../../../images/icons/icon-pay-01.png" alt="Paypal" />
          <img src="../../../images/icons/icon-pay-02.png" alt="Visa" />
          <img src="../../../images/icons/icon-pay-03.png" alt="Mastercard" />
          <img src="../../../images/icons/icon-pay-04.png" alt="PaymentMethod" />
          <img src="../../../images/icons/icon-pay-05.png" alt="Discover" />
        </div>
      </div>
    </footer>
)
}