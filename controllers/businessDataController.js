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
    return res.json(businessData);
  }
}