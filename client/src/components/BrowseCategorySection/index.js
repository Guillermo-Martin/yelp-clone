import React from "react";
import { Link } from "react-router-dom";
import CategoryTile from "../CategoryTile";
import restaurantsIcon from "../../assets/images/restaurantsIcon.png";
import shoppingIcon from "../../assets/images/shoppingIcon.png";
import nightlifeIcon from "../../assets/images/nightlifeIcon.png";
import activelifeIcon from "../../assets/images/activelifeIcon.png";
import spaIcon from "../../assets/images/spaIcon.png";
import automotiveIcon from "../../assets/images/automotiveIcon.png";
import homeserviceIcon from "../../assets/images/homeserviceIcon.png";
import miscIcon from "../../assets/images/miscIcon.png";
import "./styles.css";

function BrowseCategorySection() {
  return (
    <section className="BrowseCategorySection">
      <h5 className="BrowseCategorySection-title">Browse Businesses By Category</h5>
      <div className="BrowseCategorySection-tile">
        <Link to="/search/Restaurants/default" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src={restaurantsIcon}
            alt="Restaurant icon"
            category="Restaurants"  
          />
        </Link>
      </div>

      <div className="BrowseCategorySection-tile">
        <Link to="/search/Shopping/default" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src={shoppingIcon}
            alt="Shopping icon"
            category="Shopping"  
          />
        </Link>
      </div>

      <div className="BrowseCategorySection-tile">
        <Link to="/search/Nightlife/default" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src={nightlifeIcon}
            alt="Nightlife icon"
            category="Nightlife"  
          />
        </Link>
      </div>

      <div className="BrowseCategorySection-tile">
        <Link to="/search/Active Life/default" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src={activelifeIcon}
            alt="Active life icon"
            category="Active Life"  
          />
        </Link>
      </div>

      <div className="BrowseCategorySection-tile">
        <Link to="/search/Beauty and Spas/default" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src={spaIcon}
            alt="Beauty and spas icon"
            category="Beauty & Spas"  
          />
        </Link>
      </div>

      <div className="BrowseCategorySection-tile">
        <Link to="/search/Automotive/default" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src={automotiveIcon}
            alt="Automotive icon"
            category="Automotive"  
          />
        </Link>
      </div>

      <div className="BrowseCategorySection-tile">
        <Link to="/search/Home Services/default" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src={homeserviceIcon}
            alt="Home icon"
            category="Home Services"  
          />
        </Link>
      </div>

      <div className="BrowseCategorySection-tile">
        <Link to="/search/More Categories/default" className="BrowseCategorySection-link">
          <CategoryTile 
            section="BrowseCategory" 
            src={miscIcon}
            alt="Misc icon"
            category="More Categories"  
          />
        </Link>
      </div>
    </section>
  );
}

export default BrowseCategorySection;
