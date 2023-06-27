import Home from "./Home.tsx";
import Cuisine from "./Cuisine.tsx";
import {Route, Routes} from "react-router-dom";

const Pages = () => {
	return(

			<Routes>
				<Route path="/"	element={<Home />} />
				<Route path="/cuisine/:type" element={<Cuisine />} />
			</Routes>
			);

}

export default Pages;