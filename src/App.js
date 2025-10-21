import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/navigation/nav";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import MissionPage from "./pages/mission";
import CausePage from "./pages/cause";
import EventsPage from "./pages/events";
import ContactPage from "./pages/contact";
import CommunityPage from "./pages/community";
import GalleryPage from "./pages/gallery";
import Footer from "./components/navigation/footer";
import ThankYou from "./components/forms/thankYou";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<div className='App w-screen min-h-screen'>
				<Nav />
				<Switch>
					<Route exact path='/' component={HomePage}></Route>
					<Route path='/about' component={AboutPage}></Route>
					<Route path='/mission' component={MissionPage}></Route>
					<Route path='/cause' component={CausePage}></Route>
					<Route path='/events' component={EventsPage}></Route>
					<Route path='/contact' component={ContactPage}></Route>
					<Route path='/community' component={CommunityPage}></Route>
					<Route path='/gallery' component={GalleryPage}></Route>
					<Route path='/thank-you' component={ThankYou}></Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
