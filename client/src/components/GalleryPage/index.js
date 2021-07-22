import React from "react";
import { useSelector } from "react-redux";
import Overlay from "./../Overlay";
import "./styles.css";

const picArr = [
  "https://images.unsplash.com/photo-1520942702018-0862200e6873?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2104&q=80",
  "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2104&q=80",
  "https://images.unsplash.com/photo-1520942702018-0862200e6873?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2104&q=80",
  "https://images.unsplash.com/photo-1520942702018-0862200e6873?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2104&q=80",
  "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2104&q=80",
  "https://images.unsplash.com/photo-1520942702018-0862200e6873?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2104&q=80",
]


function GalleryPage() {
  // extract state from store
  const businessDetails = useSelector(state => state.businessDetails);

  // create a tile fo every image
  const allImg = picArr.map(image => (
    <Overlay src={image} />
  ));

  return (
    <section className="GalleryPage">
      <h2>Photos for {businessDetails.details.name}</h2>
      
      <hr></hr>

      {/* Gallery */}
      <div className="GalleryPage-container">
        {allImg}
      </div>
    </section>
  );
}

export default GalleryPage;
