// Express setup
// ========================================
const express = require("express");
const app = express();
const PORT = 3001;


// Body parser middleware
// ========================================
app.use(express.urlencoded({ extended:true }));
app.use(express.json());


// Data for testing (delete when finished)
// ========================================
let characters = [
  {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  },
  {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  },
  {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    forcePoints: 1350
  }
];


// API routes 
// ========================================
app.get("/", function(req, res) {
  return res.json(characters);
});


// Listener
// ========================================
app.listen(PORT, function() {
  console.log(`App listening on http://localhost:${PORT}`);
});
