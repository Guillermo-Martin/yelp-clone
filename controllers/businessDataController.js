const businessData = require("./../businessData.json");

module.exports = {
  getAllBusinessData: (req, res) => {
    console.log("you've reached the getAllBusinessData function!");
    return res.json(businessData);
  },
  searchAllBusinessData: (req, res) => {
    console.log("you've reached the searchAllBusinessData function!");
    
    // get the search text from the URL
    const { businessInput, cityInput } = req.params;
    console.log(businessInput, cityInput);

    // if both inputs are "default", return all the data
    if(businessInput === "default" && cityInput === "default"){
      console.log("they're empty!");
      return res.json(businessData);
    } else if(businessInput === "default"){
      // filter through businessData JSON
      let allSearchResults = businessData.filter(function(business){

        // change cityInput into a single string and lowercase
        let cityInputLower = cityInput.split(" ").join("").toLowerCase();

        // change "neighborhood" in businessData JSON to lowercase
        let neighborhoodLower = business.neighborhood.split(" ").join("").toLowerCase();
        
        // see if the "cityInput" exists in the "queryCity" array or in "neighborhood"
        if(business.queryCity.includes(cityInputLower) || neighborhoodLower === cityInputLower){
          // if it does, add it to allSearchResults;
          return business;
        }
      });
 
      // send the filtered results back to the front end
      console.log("allSearchResults", allSearchResults);
      return res.json(allSearchResults);
    } else if(cityInput === "default") {
      // filter through businessData JSON
      let allSearchResults = businessData.filter(function(business){

        // change businessInput, business "type" to lowercase
        let businessInputLower = businessInput.toLowerCase();
        
        // change business "name" to lowercase letters, then turn into an array
        let businessNameArr = business.name.toLowerCase().split(" ");

        // change all "types" in the array to lowercase
        let businessTypesLower = business.type.map(type => type.toLowerCase());

        // see if the "businessInput" exists in the "name" or "type" array
        if(businessNameArr.includes(businessInputLower) || businessTypesLower.includes(businessInputLower)){
          // if it does, add it to allSearchResults;
          return business;
        }
      });

      // send the filtered results back to the front end
      console.log("allSearchResults", allSearchResults);
      return res.json(allSearchResults);
    } else {
      // filter through businessData JSON
      let allSearchResults = businessData.filter(function(business){

        // change businessInput, business "type" to lowercase
        let businessInputLower = businessInput.toLowerCase();
        
        // change business "name" to lowercase letters, then turn into an array
        let businessNameArr = business.name.toLowerCase().split(" ");

        // change all "types" in the array to lowercase
        let businessTypesLower = business.type.map(type => type.toLowerCase());

        // change cityInput into a single string and lowercase
        let cityInputLower = cityInput.split(" ").join("").toLowerCase();

        // change "neighborhood" in businessData JSON to lowercase
        let neighborhoodLower = business.neighborhood.split(" ").join("").toLowerCase();
        
        // see if the "businessInput" and "cityInput" exits in the "name", "type", "queryCity", or "neighborhood"
        if((businessNameArr.includes(businessInputLower) || businessTypesLower.includes(businessInputLower)) && (business.queryCity.includes(cityInputLower) || neighborhoodLower === cityInputLower)){
          // if it does, add it to allSearchResults;
          return business;
        }
      });

      // send the filtered results back to the front end
      console.log("allSearchResults", allSearchResults);
      return res.json(allSearchResults);
    }
  }
}

