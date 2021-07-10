import React from "react";
import CategoryTile from "../CategoryTile";
import { Button } from "react-bootstrap";
import "./styles.css";

function MenuSection(props) {
  console.log("in menu", props.smallMenu);

  // extract data from props
  const { smallMenu } = props;

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
      <h5>Menu</h5>
      <div>
        {allSmallMenu}
      </div>
      <a href="#"><Button variant="outline-secondary" className="MenuSection-btn"><i class="fas fa-book-open"></i>Full Menu</Button></a>
    </section>
  );
}

export default MenuSection;
