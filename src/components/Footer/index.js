import React from "react";

let aboutLinks = ["cat", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum",];

function Footer(){
  let allAboutLinks = aboutLinks.map(link => (
    <li>{link}</li>
  ));

  return (
    <footer>
      {/* <h5>Footer</h5> */}
      <h6>About</h6>
      <ul>
        {/* <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li> */}
        {allAboutLinks}
      </ul>
      <h6>Discover</h6>
      <ul>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </ul>
      <h6>Explore For Business</h6>
      <ul>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </ul>
      <h6>Languages</h6>
      <ul>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </ul>
      <h6>Countries</h6>
      <ul>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </ul>
    </footer>
  );
}

export default Footer;
