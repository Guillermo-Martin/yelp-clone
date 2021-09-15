import React from "react";
import { Link } from "react-router-dom";
import CategoryTile from "../CategoryTile";
import { Button } from "react-bootstrap";
import "./styles.css";

function MenuSection(props) {
  // extract data from props
  const { smallMenu, businessUrl, servicesRendered } = props;

  // create a CategoryTile for every item in the smallMenu
  // smallMenu array for rendering
  let allSmallMenu = "";

  // if smallMenu isn't undefined...
  if(smallMenu !== undefined){
    // ...check to see if a small menu exists. if so, map and create the items
    if(smallMenu.exists) {
      allSmallMenu = smallMenu.items.map(item => (
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
  }

  // servicesRendered for rendering
  let allServices = "";

  if(servicesRendered){
    allServices = servicesRendered.map(service => (
      <li>{service}</li>
    ))
  }

  return (
    <section className="MenuSection">
      <div>
        {/* if smallMenu exists or a fullMenu exists, show the "menu" section; else show the "services rendered" section */}
        {
          smallMenu.exists || smallMenu.fullMenu
            ? 
              <div>
                <h5>Menu</h5>
                {allSmallMenu}
                <Link to={`${businessUrl}/menu`}><Button variant="outline-secondary" className="MenuSection-btn"><i class="fas fa-book-open"></i>Full Menu</Button></Link>
              </div>
            : 
              <div className="MenuSection-services-rendered">
                <h5>Services Offered</h5>
                <ul>
                  {allServices}
                </ul>
                
              </div>
              
        }
      </div>
    </section>
  );
}

export default MenuSection;
