// ===== CLOUD FIRESTORE SETUP =====
const admin = require('firebase-admin');
const { serviceAccount } = require("./../config");

// Initialize the app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Create the database
const db = admin.firestore();

// ===== CONTROLLER FUNCTIONS =====
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

    // create a collection reference (for database searching)
    const businessRef = db.collection("businesses");

    try {
      // ===== RETRIEVE ALL DATA IF BOTH INPUTS ARE EMPTY =====
      // if both inputs are "default" (meaning, there were no inputs), return all the data
      if(businessInput === "default" && cityInput === "default"){
        console.log("Inputs are empty!");

        // create a query snapshot for all the businesses
        const querySnapshot = await businessRef.get();

        // access querySnapshot as an array (using ".docs"), map through it.  For every document, return its data
        let allBusinessData = querySnapshot.docs.map(doc => {
          return doc.data();
        });

        // send data to front end
        return res.status(200).json(allBusinessData);
      } else if(businessInput === "default"){
        // ===== SEARCH BUSINESSES BY CITY/NEIGHBORHOOD =====
        // if businessInput is "default" (meaning businessInput was empty), search through all the cities
        // change cityInput into a single string and lowercase
        let cityInputLower = cityInput.split(" ").join("").toLowerCase();

        // create a query snapshot; see if "cityInputLower" is found in the "queryCity" array of each document
        const querySnapshot = await businessRef.where("queryCity", "array-contains", cityInputLower).get();

        // access querySnapshot as an array, map, return data
        let allSearchResults = querySnapshot.docs.map(doc => {
          return doc.data();
        });

        // send data to front end
        return res.status(200).json(allSearchResults);
      } else if(cityInput === "default") {
        // ===== SEARCH BUSINESSES BY BUSINESS/TYPE =====
        // if cityInput is "default" (meaning cityInput was empty), search through all the businesses
        // change businessInput to single string and lowercase
        let businessInputLower = businessInput.split(" ").join("").toLowerCase();

        // create a query snapshot; see if "businessInputLower" is found in the "queryBusiness" array of each document
        const querySnapshot = await businessRef.where("queryBusiness", "array-contains", businessInputLower).get();

        // access querySnapshot as an array, map, return data
        let allSearchResults = querySnapshot.docs.map(doc => {
          return doc.data();
        });

        // send data to front end
        return res.status(200).json(allSearchResults);

      } else {
        // ===== SEARCH BY BUSINESS AND CITY/NEIGHBORHOOD =====
        // change businessInput and cityInput to single string and lowercase
        let businessInputLower = businessInput.split(" ").join("").toLowerCase();
        let cityInputLower = cityInput.split(" ").join("").toLowerCase();

        // get all businessData
        // create a collection reference
        const businessesRef = db.collection("businesses");

        // create a query snapshot
        const querySnapshot = await businessesRef.get();

        // access querySnapshot as an array (using ".docs"), map through it.  For every document, return its data
        let allBusinessData = querySnapshot.docs.map(doc => {
          return doc.data();
        });

        // filter through allBusinessData; return results if business and city are included
        let filteredResults = allBusinessData.filter(business => {
          if(((business.queryBusiness.includes(businessInputLower))) && (business.queryCity.includes(cityInputLower))){
            return business;
          } 
        });

        // send data to front end
        return res.status(200).json(filteredResults);
      }
    } catch (error) {
      return res.status(404).json(error);
    }
  },
  getOneBusinessDetails: async (req, res) => {
    console.log("you made it to the getOneBusinessDetails function!");
    
    // get the businessId from the front end (req.params.id)
    const businessId = req.params.id;

    // search for the businessId in the "businesses" collection, then create a document reference
    const docRef = db.collection("businesses").doc(businessId);

    // create a snapshot of the document
    const docSnapshot = await docRef.get();

    // see if the document exists
    if(!docSnapshot){
      // if it doesn't, send back a "doesn't exist message"
      console.log("That document doesn't exist!");
      res.send("That document doesn't exist!");
    } else {
      // else, send the data to the front end

      // save data to variable
      const businessData = docSnapshot.data();
      
      // change type to string beefore sending it to front end
      businessData.type = businessData.type.join(", ");
      
      // send data to front end
      return res.status(200).json(businessData);
      
    }
  }
}
