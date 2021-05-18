import React from "react";
import CategoryTile from "./../CategoryTile";
import "./styles.css";

function BrowseCategorySection() {
  return (
    // <div>
    <section>
      <h5 className="BrowseCategorySection-title">Browse Businesses By Category</h5>
      <div className="BrowseCategorySection-tile">
        <CategoryTile 
          section="BrowseCategory" 
          src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3451&q=80"
          category="Burgers"  
        />
      </div>

      <div className="BrowseCategorySection-tile">
        <CategoryTile 
          section="BrowseCategory" 
          src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3451&q=80"
          category="Burgers"  
        />
      </div>

      <div className="BrowseCategorySection-tile">
        <CategoryTile 
          section="BrowseCategory" 
          src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3451&q=80"
          category="Burgers"  
        />
      </div>
    </section>
      
    // </div>
  );
}

export default BrowseCategorySection;
