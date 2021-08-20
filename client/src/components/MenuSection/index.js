import React from "react";
import { Link } from "react-router-dom";
import CategoryTile from "../CategoryTile";
import { Button } from "react-bootstrap";
import "./styles.css";

function MenuSection(props) {
  // extract data from props
  const { smallMenu, businessUrl } = props;

  // create a CategoryTile for every item in the smallMenu
  // smallMenu array for rendering
  let allSmallMenu = "";

  if(smallMenu !== undefined){
    allSmallMenu = smallMenu.map(item => (
      <div className="MenuSection-tile">
        <a href="#">
          <CategoryTile 
            src={item.imgSrc}
            alt={item.item}
            category={item.item} // <-- Menu item
            section="MenuSection"
          />
          <p>{item.numPhotos} Photos &#8226; {item.numReviews} Reviews</p>
        </a> 
      </div>
    ))
  }


  return (
    <section className="MenuSection">
      <div>
        {/* if smallMenu exists, show the "menu" section; else show the "services rendered" section */}
        {
          smallMenu 
            ? 
              <div>
                <h5>Menu</h5>
                {allSmallMenu}
                <Link to={`${businessUrl}/menu`}><Button variant="outline-secondary" className="MenuSection-btn"><i class="fas fa-book-open"></i>Full Menu</Button></Link>
              </div>
            : 
              <h1>Services Rendered</h1>
        }
        <Link to={`${businessUrl}/menu`}><Button variant="outline-secondary" className="MenuSection-btn"><i class="fas fa-book-open"></i>Full Menu</Button></Link>
      </div>
    </section>
  );
}

export default MenuSection;
