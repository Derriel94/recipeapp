import Home from "./Home.tsx";
import Cuisine from "./Cuisine.tsx";
import Searched from "./Searched.tsx";
import Recipe from "./Recipe";
import {Route, Routes} from "react-router-dom";

const Pages = () => {
	return(

			<Routes>
				<Route path="/"	element={<Home />} />
				<Route path="/cuisine/:type" element={<Cuisine />} />
				<Route path="/searched/:search"	element={<Searched />} />
				<Route path="/recipe/:name"	element={<Recipe />} />

			</Routes>
			);

}

export default Pages;