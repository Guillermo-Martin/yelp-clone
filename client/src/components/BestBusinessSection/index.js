import React from "react";
import CategoryTile from "../CategoryTile";
import "./styles.css";

function BestBusinessSection() {
  return (
    <section className="BestBusinessSection">
      <h5 className="BestBusinessSection-title">Find the Best Businesses in Town</h5>

      {/* Photo by Jessica Ruscello: https://unsplash.com/@jruscello */}
      <div className="BestBusinessSection-tile">
        <a href="#" className="BestBusinessSection-link">
          <CategoryTile src="https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80" alt="Books" category="Bookstores" section="BestBusiness" />
        </a>
      </div>
      
      {/* Photo by Bianca Jordan: https://unsplash.com/@biancajordan */}
      <div className="BestBusinessSection-tile">
        <a href="#" className="BestBusinessSection-link">
          <CategoryTile src="https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80" alt="Laundromats" category="Laundromats" section="BestBusiness" />
        </a>
      </div>

      {/* Photo by Ronnie George: https://unsplash.com/@realestateron */}
      <div className="BestBusinessSection-tile">
        <a href="#" className="BestBusinessSection-link">
          <CategoryTile src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80" alt="House" category="Realtors" section="BestBusiness" />
        </a>
      </div>

      {/* Photo by HUUM: https://unsplash.com/@huumsauna */}
      <div className="BestBusinessSection-tile">
        <a href="#" className="BestBusinessSection-link">
          <CategoryTile src="https://images.unsplash.com/photo-1583416750470-965b2707b355?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80" alt="Sauna" category="Spas" section="BestBusiness" />
        </a>
      </div>
    </section>
  );
}

export default BestBusinessSection;
