import React from "react";
import MaterialUIButtons from "../../components/Buttons/MaterialUIButtons";
import Typography from "@mui/material/Typography";

const MaterialUI: React.FC = () => {
	return (
		<>
			<Typography variant="h4" align="center">
				MaterialUI
			</Typography>
			<MaterialUIButtons />
		</>
	);
};

export default MaterialUI;
