// import Counter from "./components/Counter";
import HomePage from "./components/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import DetailsPage from "./components/DetailsPage";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";
import LogInPage from "./components/LogInPage";
import SignUpPage from "./components/SignUpPage";
import SearchResultsPage from "./components/SearchResultsPage";
import MoreCitiesPage from "./components/MoreCitiesPage";
import GalleryPage from "./components/GalleryPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <TopNavbar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search/:businessInput/:cityInput/details/:id" component={DetailsPage} />
          <Route exact path="/login" component={LogInPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/search/:businessInput/:cityInput" component={SearchResultsPage} />
          <Route exact path="/morecities" component={MoreCitiesPage} />
          <Route exact path="/search/:businessInput/:cityInput/details/:id/photos" component={GalleryPage} />
        </Switch>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
