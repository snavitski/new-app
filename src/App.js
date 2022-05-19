import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Home/Home";
import About from "./components/About/About";
import Favorite from "./components/Favorite/Favorite";
import { Routes, Route } from "react-router-dom";
import WrongAddress from "./components/WrongAddress";

const App = () => {
	return (
		<main>
			<NavBar />
			<Container>
				<Routes>
					<Route patch='/' element={<Home />} />
					<Route patch='/about' element={<About />} />
					<Route patch='/favorite' element={<Favorite />} />
					<Route patch='*' element={<WrongAddress />} />
				</Routes>
			</Container>
		</main>
	);
};

export default App;
