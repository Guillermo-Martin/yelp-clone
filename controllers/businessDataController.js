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
    // for every business in the "businessData" JSON, if the "businessInput" equals the "business.type",
    // add it to "allSearchResults"
    const allSearchResults = businessData.filter(business => businessInput === business.type);

    
    // send the filtered results back to the front end
    return res.json(allSearchResults);
  }
}