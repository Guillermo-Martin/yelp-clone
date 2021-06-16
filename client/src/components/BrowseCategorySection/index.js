import React from "react";
import CategoryTile from "../CategoryTile";
import "./styles.css";
import restaurantsIcon from "../../assets/images/restaurantsIcon.png";
import shoppingIcon from "../../assets/images/shoppingIcon.png";
import nightlifeIcon from "../../assets/images/nightlifeIcon.png";
import activelifeIcon from "../../assets/images/activelifeIcon.png";
import spaIcon from "../../assets/images/spaIcon.png";
import automotiveIcon from "../../assets/images/automotiveIcon.png";
import homeserviceIcon from "../../assets/images/homeserviceIcon.png";
import miscIcon from "../../assets/images/miscIcon.png";

function BrowseCategorySection() {
  return (
    // <div>
    <section className="BrowseCategorySection">
      <h5 className="BrowseCategorySection-title">Browse Businesses By Category</h5>
      <div className="BrowseCategorySection-tile">
        <a href="#" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src={restaurantsIcon}
            alt="Restaurant icon"
            category="Restaurants"  
          />
        </a>
      </div>

      <div className="BrowseCategorySection-tile">
        <a href="#" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src={shoppingIcon}
            alt="Shopping icon"
            category="Shopping"  
          />
        </a>
      </div>

      <div className="BrowseCategorySection-tile">
        <a href="#" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src={nightlifeIcon}
            alt="Nightlife icon"
            category="Nightlife"  
          />
        </a>
      </div>

      <div className="BrowseCategorySection-tile">
        <a href="#" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src={activelifeIcon}
            alt="Active life icon"
            category="Active Life"  
          />
        </a>
      </div>

      <div className="BrowseCategorySection-tile">
        <a href="#" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src={spaIcon}
            alt="Beauty and spas icon"
            category="Beauty & Spas"  
          />
        </a>
      </div>

      <div className="BrowseCategorySection-tile">
        <a href="#" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src={automotiveIcon}
            alt="Automotive icon"
            category="Automotive"  
          />
        </a>
      </div>

      <div className="BrowseCategorySection-tile">
        <a href="#" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src={homeserviceIcon}
            alt="Home icon"
            category="Home Services"  
          />
        </a>
      </div>

      <div className="BrowseCategorySection-tile">
        <a href="#" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src={miscIcon}
            alt="Misc icon"
            category="More Categories"  
          />
        </a>
      </div>
    </section>
      
    // </div>
  );
}

export default BrowseCategorySection;
