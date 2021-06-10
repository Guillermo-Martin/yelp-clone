// import Counter from "./components/Counter";
import HomePage from "./components/HomePage";
import DetailsPage from "./components/DetailsPage";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";
import LogInPage from "./components/LogInPage";
import SignUpPage from "./components/SignUpPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div>
      {/* <Router>
        <TopNavbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/details" component={DetailsPage} />
          <Route exact path="/login" component={LogInPage} />
          <TopNavbar />
        </Switch>
        
        <Footer />
      </Router> */}

      <SignUpPage />
    </div>
  );
}

export default App;
