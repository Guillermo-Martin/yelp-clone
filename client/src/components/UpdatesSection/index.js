import React from "react";
import "./styles.css";

function UpdatesSection(props) {
  // extract data from props
  const { covid19Updates, services, safety } = props;

  // create li for services
  // services array for rendering
  let allServices = "";

  if(services !== undefined){
    allServices = services.map(service => (
      <li>{service.doing ? <i class="fas fa-check"></i> : <i class="fas fa-times"></i> } {service.service}</li>
    ));
  }

  // create li for safety measures
  // safety array for rendering
  let allSafety = "";

  if(safety !== undefined){
    allSafety = safety.map(safety => (
      <li>{safety.doing ? <i class="fas fa-check"></i> : <i class="fas fa-times"></i> } {safety.type}</li>
    ))
  }
  
  
  return (
    <section className="UpdatesSection">
      <div className="UpdatesSection-div">
        <h5>COVID-19 Updates 
          <a href="#">
            <span>Edit<i class="fas fa-pencil-alt"></i></span>
          </a>
        </h5>
        <p>{covid19Updates}</p>
        <p className="UpdatesSection-div-date">Posted on May 21, 2021</p>

        <h6>Updated Services</h6>
        <ul>
          {allServices}
        </ul>
      
        <h6>Health &#38; Safety Measures</h6>
        <p className="UpdatesSection-p-safety">Based on info from the business or our users <i class="fas fa-info-circle"></i></p>
        <ul>
          {allSafety}
        </ul>
      </div>
      
    </section>
  );
}

export default UpdatesSection;
