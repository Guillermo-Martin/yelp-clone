const businessData = require("./../businessData.json");
// Cloud Firestore setup
const admin = require('firebase-admin');
const { serviceAccount } = require("./../config");

// Initialize the app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Create the database
const db = admin.firestore();

// Functions
module.exports = {
  getAllBusinessData: async (req, res) => {
    // Retrieve data from Firestore as JSON:  https://stackoverflow.com/questions/53569696/retrieve-data-from-firestore-as-json/53569812
    console.log("you've reached the getAllBusinessData function!");

    // create a collection reference
    const businessesRef = db.collection("businesses");

    // create a query snapshot
    const querySnapshot = await businessesRef.get();

    // access querySnapshot as an array (using ".docs"), map through it.  For every document, return its data
    let allBusinessData = querySnapshot.docs.map(doc => {
      return doc.data();
    });

    // send data to front end
    res.json(allBusinessData);
  },
  searchAllBusinessData: async (req, res) => {
    console.log("you've reached the searchAllBusinessData function!");
    
    // get the search text from the URL
    const { businessInput, cityInput } = req.params;
    console.log(businessInput, cityInput);

    // create a collection reference (for database searching)
    const businessRef = db.collection("businesses");

    try {
      // if both inputs are "default" (meaning, there were no inputs), return all the data
      if(businessInput === "default" && cityInput === "default"){
        console.log("Inputs are empty!");

        // create a query snapshot
        const querySnapshot = await businessRef.get();

        // access querySnapshot as an array (using ".docs"), map through it.  For every document, return its data
        let allBusinessData = querySnapshot.docs.map(doc => {
          return doc.data();
        });

        // send data to front end
        return res.status(200).json(allBusinessData);

      } else if(businessInput === "default"){
        // if businessInput is "default" (meaning businessInput was empty), search through all the cities
        // change cityInput into a single string and lowercase
        let cityInputLower = cityInput.split(" ").join("").toLowerCase();

        // create a query snapshot, see if "cityInputLower" is found in the "queryCity" array of each document
        const querySnapshot = await businessRef.where("queryCity", "array-contains", cityInputLower).get();

        // access querySnapshot as an array, map, return data
        let allSearchResults = querySnapshot.docs.map(doc => {
          return doc.data();
        });

        // send data to front end
        return res.status(200).json(allSearchResults);
        
      } else if(cityInput === "default") {
        // filter through businessData JSON
        // let allSearchResults = businessData.filter(function(business){

        //   // change businessInput, business "type" to lowercase
        //   let businessInputLower = businessInput.toLowerCase();
          
        //   // change business "name" to lowercase letters, then turn into an array
        //   let businessNameArr = business.name.toLowerCase().split(" ");

        //   // change all "types" in the array to lowercase
        //   let businessTypesLower = business.type.map(type => type.toLowerCase());

        //   // see if the "businessInput" exists in the "name" or "type" array
        //   if(businessNameArr.includes(businessInputLower) || businessTypesLower.includes(businessInputLower)){
        //     // if it does, add it to allSearchResults;
        //     return business;
        //   }
        // });

        // // send the filtered results back to the front end
        // console.log("allSearchResults", allSearchResults);
        // return res.json(allSearchResults);
      } else {
        // filter through businessData JSON
        // let allSearchResults = businessData.filter(function(business){

        //   // change businessInput, business "type" to lowercase
        //   let businessInputLower = businessInput.toLowerCase();
          
        //   // change business "name" to lowercase letters, then turn into an array
        //   let businessNameArr = business.name.toLowerCase().split(" ");

        //   // change all "types" in the array to lowercase
        //   let businessTypesLower = business.type.map(type => type.toLowerCase());

        //   // change cityInput into a single string and lowercase
        //   let cityInputLower = cityInput.split(" ").join("").toLowerCase();

        //   // change "neighborhood" in businessData JSON to lowercase
        //   let neighborhoodLower = business.neighborhood.split(" ").join("").toLowerCase();
          
        //   // see if the "businessInput" and "cityInput" exits in the "name", "type", "queryCity", or "neighborhood"
        //   if((businessNameArr.includes(businessInputLower) || businessTypesLower.includes(businessInputLower)) && (business.queryCity.includes(cityInputLower) || neighborhoodLower === cityInputLower)){
        //     // if it does, add it to allSearchResults;
        //     return business;
        //   }
        // });

        // // send the filtered results back to the front end
        // console.log("allSearchResults", allSearchResults);
        // return res.json(allSearchResults);
      }
    } catch (error) {
      return res.status(404).json(error);
    }
    
  }
}



// FOR REFERENCE
// searchAllBusinessData: (req, res) => {
//   console.log("you've reached the searchAllBusinessData function!");
  
//   // get the search text from the URL
//   const { businessInput, cityInput } = req.params;
//   console.log(businessInput, cityInput);

//   // if both inputs are "default", return all the data
//   if(businessInput === "default" && cityInput === "default"){
//     console.log("they're empty!");
//     return res.json(businessData);
//   } else if(businessInput === "default"){
//     // filter through businessData JSON
//     let allSearchResults = businessData.filter(function(business){

//       // change cityInput into a single string and lowercase
//       let cityInputLower = cityInput.split(" ").join("").toLowerCase();

//       // change "neighborhood" in businessData JSON to lowercase
//       let neighborhoodLower = business.neighborhood.split(" ").join("").toLowerCase();
      
//       // see if the "cityInput" exists in the "queryCity" array or in "neighborhood"
//       if(business.queryCity.includes(cityInputLower) || neighborhoodLower === cityInputLower){
//         // if it does, add it to allSearchResults;
//         return business;
//       }
//     });

//     // send the filtered results back to the front end
//     console.log("allSearchResults", allSearchResults);
//     return res.json(allSearchResults);
//   } else if(cityInput === "default") {
//     // filter through businessData JSON
//     let allSearchResults = businessData.filter(function(business){

//       // change businessInput, business "type" to lowercase
//       let businessInputLower = businessInput.toLowerCase();
      
//       // change business "name" to lowercase letters, then turn into an array
//       let businessNameArr = business.name.toLowerCase().split(" ");

//       // change all "types" in the array to lowercase
//       let businessTypesLower = business.type.map(type => type.toLowerCase());

//       // see if the "businessInput" exists in the "name" or "type" array
//       if(businessNameArr.includes(businessInputLower) || businessTypesLower.includes(businessInputLower)){
//         // if it does, add it to allSearchResults;
//         return business;
//       }
//     });

//     // send the filtered results back to the front end
//     console.log("allSearchResults", allSearchResults);
//     return res.json(allSearchResults);
//   } else {
//     // filter through businessData JSON
//     let allSearchResults = businessData.filter(function(business){

//       // change businessInput, business "type" to lowercase
//       let businessInputLower = businessInput.toLowerCase();
      
//       // change business "name" to lowercase letters, then turn into an array
//       let businessNameArr = business.name.toLowerCase().split(" ");

//       // change all "types" in the array to lowercase
//       let businessTypesLower = business.type.map(type => type.toLowerCase());

//       // change cityInput into a single string and lowercase
//       let cityInputLower = cityInput.split(" ").join("").toLowerCase();

//       // change "neighborhood" in businessData JSON to lowercase
//       let neighborhoodLower = business.neighborhood.split(" ").join("").toLowerCase();
      
//       // see if the "businessInput" and "cityInput" exits in the "name", "type", "queryCity", or "neighborhood"
//       if((businessNameArr.includes(businessInputLower) || businessTypesLower.includes(businessInputLower)) && (business.queryCity.includes(cityInputLower) || neighborhoodLower === cityInputLower)){
//         // if it does, add it to allSearchResults;
//         return business;
//       }
//     });

//     // send the filtered results back to the front end
//     console.log("allSearchResults", allSearchResults);
//     return res.json(allSearchResults);
//   }
// }