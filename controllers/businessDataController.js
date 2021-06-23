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
    // console.log(businessInput, cityInput);

    // filter through businessData JSON
    const allSearchResults = businessData.filter(function(business){
      // change businessInput, business "type" to lowercase
      let businessInputLower = businessInput.toLowerCase();
      
      // change business "name" to lowercase letters, then turn into an array
      let businessNameArr = business.name.toLowerCase().split(" ");

      // change all "types" in the array to lowercase
      let businessTypesLower = business.type.map(type => type.toLowerCase());

      // see if the "businessInput" exists in the array
      if(businessNameArr.includes(businessInputLower) || businessTypesLower.includes(businessInputLower)){
        // if it does, add it to allSearchResults;
        return business;
      }
    });

    
    // send the filtered results back to the front end
    console.log("allSearchResults", allSearchResults);
    return res.json(allSearchResults);
  }
}