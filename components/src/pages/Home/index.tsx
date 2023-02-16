import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home: React.FC = () => {
	return (
		<div>
			<Link to="/antdesign">
				<span>AntDesign</span>
			</Link>
			<Link to="/Bootstrap">
				<span>Bootstrap</span>
			</Link>
			<Link to="/materialui">
				<span>MaterialUI</span>
			</Link>
		</div>
	);
};

export default Home;
