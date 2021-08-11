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
  
      {/* image */}
      <img src={item.menu.src} alt={item.menu.name} />
      
      {/* description */}
      <p>{item.menu.description}</p>

      {/* icons */}
      <div className="MenuPage-info-icons">
        <i className="fas fa-star"></i><span>5 reviews</span>
        <i className="fas fa-camera"></i><span>10 photos</span>
      </div>
      
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
