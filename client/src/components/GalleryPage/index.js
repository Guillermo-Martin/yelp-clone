import React from "react";
import { useSelector } from "react-redux";
import Overlay from "./../Overlay";
import "./styles.css";


function GalleryPage() {
  // extract state from store
  const businessDetails = useSelector(state => state.businessDetails);
  // save business photos to variable
  const businessPhotos = businessDetails.details.photos;

  // create a tile fo every image
  const allPhotos = businessPhotos.map(photo => (
    <Overlay 
      src={photo.photoInfo.src}
      alt={photo.photoInfo.alt}
      description={photo.photoInfo.description}
    />
  ));

  return (
    <section className="GalleryPage">
      <h2>Photos for {businessDetails.details.name}</h2>
      
      <hr></hr>

      {/* Gallery */}
      <div className="GalleryPage-container">
        {allPhotos}
      </div>
    </section>
  );
}

export default GalleryPage;
