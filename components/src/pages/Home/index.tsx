import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { Button as MUIButton } from "@mui/material";
import { Button as BSButton } from "react-bootstrap";
import { Button as AntDButton } from "antd";

const Home: React.FC = () => {
	return (
		<div>
			<Link to="/antdesign">
				<AntDButton type="primary">AntDesign</AntDButton>
			</Link>
			<Link to="/Bootstrap">
				<BSButton variant="primary">Bootstrap</BSButton>
			</Link>
			<Link to="/materialui">
				<MUIButton variant="contained">MaterialUI</MUIButton>
			</Link>
		</div>
	);
};

export default Home;
