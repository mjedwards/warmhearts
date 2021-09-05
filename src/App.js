import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/navigation/nav";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Footer from "./components/navigation/footer";

function App() {
  return (
    <Router>
      <div className="App bg-gray-800">
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/Who-We-Are" component={AboutPage}></Route>
          {/*  <Route path="/What-We-Do" component={}></Route>
        <Route path="/Take-Action" component={}></Route>
        <Route path="/Resources" component={}></Route> 
        <Route default component={NotFound}></Route> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
