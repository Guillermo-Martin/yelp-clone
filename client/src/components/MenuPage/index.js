import React from "react";
import "./styles.css";

function MenuPage() {
  return (
    <div className="MenuPage">
      <h1>Menu For Business</h1>
      {/* Menu items will go below */}
      <div className="MenuPage-info">
        <div className="MenuPage-info-row">
          <div className="MenuPage-info-col">Milkshake</div>
          <div className="MenuPage-info-col MenuPage-info-price">$5.00</div>
        </div>
        
        <img src="https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80" alt="food" />
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
      </div>
    </div>
  );
}

export default MenuPage;
