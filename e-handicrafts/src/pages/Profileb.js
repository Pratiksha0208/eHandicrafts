import React from "react";
import "../Styles/Profileb.css";

export default function Profileb() {
  return (
    <div className="profile-page-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="user-greeting">
          <div className="avatar">
            <img src="https://via.placeholder.com/60" alt="User Avatar" />
          </div>
          <div className="greeting-text">
            <p>Hello,</p>
            <h2>Umesh Hakke</h2>
          </div>
        </div>

        {/* Sidebar Sections */}
        <div className="sidebar-section">
          <h4>MY ORDERS</h4>
          <ul>
            <li>My Orders</li>
          </ul>
        </div>

        <div className="sidebar-section">
          <h4>ACCOUNT SETTINGS</h4>
          <ul>
            <li className="active">Profile Information</li>
            <li>Manage Addresses</li>
            <li>PAN Card Information</li>
          </ul>
        </div>

        <div className="sidebar-section">
          <h4>PAYMENTS</h4>
          <ul>
            <li>Gift Cards <span className="amount">₹0</span></li>
            <li>Saved UPI</li>
            <li>Saved Cards</li>
          </ul>
        </div>

        <div className="sidebar-section">
          <h4>MY STUFF</h4>
          <ul>
            <li>My Coupons</li>
            <li>My Reviews & Ratings</li>
            <li>All Notifications</li>
            <li>My Wishlist</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Personal Information */}
        <section className="info-section">
          <div className="section-header">
            <h3>Personal Information</h3>
            <button className="edit-btn">Edit</button>
          </div>
          <div className="input-row">
            <input type="text" placeholder="Umesh" />
            <input type="text" placeholder="Hakke" />
          </div>
          <div className="gender-row">
            <label>
              <input type="radio" name="gender" checked /> Male
            </label>
            <label>
              <input type="radio" name="gender" /> Female
            </label>
          </div>
        </section>

        {/* Email Address */}
        <section className="info-section">
          <div className="section-header">
            <h3>Email Address</h3>
            <button className="edit-btn">Edit</button>
          </div>
          <input type="text" value="Umesh.ph2005@gmail.com" readOnly />
        </section>

        {/* Mobile Number */}
        <section className="info-section">
          <div className="section-header">
            <h3>Mobile Number</h3>
            <button className="edit-btn">Edit</button>
          </div>
          <input type="text" value="+919423900281" readOnly />
        </section>

        {/* FAQ Section */}
        <section className="info-section">
          <h3>FAQs</h3>
          <div className="faq">
            <p><strong>What happens when I update my email address (or mobile number)?</strong></p>
            <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>

            <p><strong>When will my Flipkart account be updated with the new email address (or mobile number)?</strong></p>
            <p>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
          </div>
        </section>
      </div>
    </div>
  );
}