import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/navigation/nav";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
// import MentorPage from "./pages/mentor";
import ActionPage from "./pages/action";
import ResourcesPage from "./pages/resources";
import Footer from "./components/navigation/footer";

function App() {
  return (
    <Router>
      <div className="App bg-gray-800">
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/Who-We-Are" component={AboutPage}></Route>
          {/* <Route path="/What-We-Do" component={MentorPage}></Route> */}
          <Route path="/Take-Action" component={ActionPage}></Route>
          <Route path="/Resources" component={ResourcesPage}></Route>
           {/* <Route default component={NotFound}></Route> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
