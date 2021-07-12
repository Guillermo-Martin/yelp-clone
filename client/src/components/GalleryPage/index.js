import React from "react";
import { Image } from "react-bootstrap";

const picArr = [
  "https://images.unsplash.com/photo-1520942702018-0862200e6873?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2104&q=80",
  "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2104&q=80"
]

const allImg = picArr.map(image => (
  <li><Image src={image} rounded style={{width: "150px", height: "150px" }}/></li>
));

function GalleryPage() {
  return (
    <section>
      <h2>Photos for Business</h2>
      <hr></hr>
      <ul>
        {allImg}
      </ul>
    </section>
  );
}

export default GalleryPage;
