import React from "react";
import CategoryTile from "./../CategoryTile";
import "./styles.css";
import shoppingIcon from "./../../assets/images/shoppingIcon.png";

function BrowseCategorySection() {
  return (
    // <div>
    <section className="BrowseCategorySection">
      <h5 className="BrowseCategorySection-title">Browse Businesses By Category</h5>
      <div className="BrowseCategorySection-tile">
        <a href="#" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src={shoppingIcon}
            category="Restaurants"  
          />
        </a>
      </div>

      <div className="BrowseCategorySection-tile">
        <a href="#" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3451&q=80"
            category="Shopping"  
          />
        </a>
      </div>

      <div className="BrowseCategorySection-tile">
        <a href="#" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3451&q=80"
            category="Nightlife"  
          />
        </a>
      </div>

      <div className="BrowseCategorySection-tile">
        <a href="#" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src={shoppingIcon}
            category="Active Life"  
          />
        </a>
      </div>

      <div className="BrowseCategorySection-tile">
        <a href="#" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3451&q=80"
            category="Beauty & Spas"  
          />
        </a>
      </div>

      <div className="BrowseCategorySection-tile">
        <a href="#" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3451&q=80"
            category="Automotive"  
          />
        </a>
      </div>

      <div className="BrowseCategorySection-tile">
        <a href="#" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3451&q=80"
            category="Home Services"  
          />
        </a>
      </div>

      <div className="BrowseCategorySection-tile">
        <a href="#" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3451&q=80"
            category="More Categories"  
          />
        </a>
      </div>
    </section>
      
    // </div>
  );
}

export default BrowseCategorySection;
