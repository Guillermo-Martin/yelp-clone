import React from "react";
import { Spinner } from "react-bootstrap";
import "./styles.css";

// images from unsplash: https://unsplash.com/@jonasjacobsson, https://unsplash.com/@risennnnn, https://unsplash.com/@adamkring, https://unsplash.com/@tmwd,
// https://unsplash.com/@ragonesco, https://unsplash.com/@tothnorex, https://unsplash.com/@taylorgsimpson, https://unsplash.com/@jareddrice, https://unsplash.com/@brdnkvision, 
// https://unsplash.com/@garilens, https://unsplash.com/@themephotos
// images for background
// const loaderImages = [
//   "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3668&q=80",
//   "https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80",
//   "https://images.unsplash.com/photo-1520307104669-26029aea9098?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80",
//   "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3455&q=80",
//   "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3667&q=80",
//   "https://images.unsplash.com/photo-1573592371950-348a8f1d9f38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3687&q=80",
//   "https://images.unsplash.com/photo-1603811410430-c7fd2df742a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2432&q=80",
//   "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80",
//   "https://images.unsplash.com/photo-1588458824593-b010a8fe1d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80",
//   "https://images.unsplash.com/photo-1585390062628-be8608aa7d83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80",
//   "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80"
// ]

function Loader() {
  
  // generate a random number
  // let randomNum = Math.floor(Math.random() * loaderImages.length);
  
  // // generate a random image from the array
  // let randomImage = loaderImages[randomNum];
  
  return (
    <div className="Loader" >
      <div className="Loader-content">
          <Spinner animation="grow" variant="light" className="Loader-content-spinner" />
          <h3>Searching...</h3>
      </div>
    </div>
  );
}

export default Loader;
