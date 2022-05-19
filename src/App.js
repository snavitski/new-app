import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Home";
import About from "./components/About/About";
import Favorite from "./components/Favorite/Favorite";
import { Routes, Route } from "react-router-dom";
import WrongAddress from "./components/WrongAddress";
import List from "./components/List/List";

const App = () => {
	return (
		<main>
			<NavBar />
			<Container>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/favorite' element={<Favorite />} />
					<Route path='/list/:listId' element={<List />} />
					<Route path='*' element={<WrongAddress />} />
				</Routes>
			</Container>
		</main>
	);
};

export default App;
