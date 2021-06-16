import React from "react";
import CategoryTile from "../CategoryTile";
import { Button } from "react-bootstrap";
import "./styles.css";

function MenuSection() {
  return (
    <section className="MenuSection">
      <h5>Menu</h5>
      <div className="MenuSection-tile">
        <a href="#">
          {/* Image by Briana Tozour: https://unsplash.com/@britozour */}
          <CategoryTile 
            src="https://images.unsplash.com/photo-1561395049-69684aacf8de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80"
            alt="Latte"
            category="Latte"
            section="MenuSection"
          />
          <p>2 Photos &#8226; 2 Reviews</p>
        </a> 
      </div>

      <div className="MenuSection-tile">
        <a href="#">
          {/* Image by Jocelyn Morales: https://unsplash.com/@molnj */}
          <CategoryTile 
            src="https://images.unsplash.com/photo-1599940778173-e276d4acb2bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3737&q=80"
            alt="Croissant"
            category="Croissant"
            section="MenuSection"
          />
          <p>2 Photos &#8226; 2 Reviews</p>
        </a>
      </div>

      <div className="MenuSection-tile">
        <a href="#">
          {/* Image by Joe Smith: https://unsplash.com/@joepix */}
          <CategoryTile 
            src="https://images.unsplash.com/photo-1590671886400-8f8088b97cb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3445&q=80"
            alt="Cookie"
            category="Cookie"
            section="MenuSection"
          />
          <p>2 Photos &#8226; 2 Reviews</p>
        </a>
      </div>

      <a href="#"><Button variant="outline-secondary" className="MenuSection-btn"><i class="fas fa-book-open"></i>Full Menu</Button></a>
    </section>
  );
}

export default MenuSection;
