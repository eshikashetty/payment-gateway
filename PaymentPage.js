import React from 'react';
import { Link } from 'react-router-dom';

const PaymentPage = () => {
  return (
    <div className="container paymentpage-bg">
      <h1 style={{ fontSize: '55px' }}>Choose a Payment Method</h1> {/* Adjust the font size as needed */}
      <Link to="/payment/cash">
        <button className="button">Cash Payment</button>
      </Link>
      <Link to="/payment/paypal">
        <button className="button">PayPal</button>
      </Link>
      <img
        src="https://cdn1.iconfinder.com/data/icons/contact-us-31/65/37-1024.png"
        alt="Animated Image"
        className="image"
        style={{ width: '70px', height: '70px' }}
      />
    </div>
  );
}

export default PaymentPage;
