import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";

function MenuPage() {
  // extract state from store
  const businessDetails = useSelector(state => state.businessDetails);

  // save menu items to variable
  const businessMenu = businessDetails.details.menu;

  console.log("asdfasdfasdfsd", businessMenu);

  // create an info card for every menu item
  const allMenuItems = businessMenu.map(item => (
    <div className="MenuPage-info">
      <div className="MenuPage-info-row">
        <div className="MenuPage-info-col">{item.menu.name}</div>
        <div className="MenuPage-info-col MenuPage-info-price">{item.menu.price}</div>
      </div>
  
      <img src={item.menu.src} alt={item.menu.name} />
      
      <p>{item.menu.description}</p>
    </div>
  ));

  return (
    <div className="MenuPage">
      <h1>Menu For Business</h1>
      {/* Menu items will go below */}
      {allMenuItems}
    </div>
  );
}

export default MenuPage;
