// Express setup
// ========================================
const express = require("express");
const app = express();
const PORT = 3001;
// Entrance into the API routes
const routes = require("./routes");


// Body parser middleware
// ========================================
app.use(express.urlencoded({ extended:true }));
app.use(express.json());


// API routes
// ========================================
app.use(routes);


// Listener
// ========================================
app.listen(PORT, function() {
  console.log(`App listening on http://localhost:${PORT}`);
});
