import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const MaterialUIButtons: React.FC = () => {
	return (
		<>
			<Stack spacing={3} direction="row">
				<Typography variant="h6" align="center">
					{" "}
					Botões
				</Typography>
				<Button
					sx={{ height: 50 }}
					size="medium"
					variant="text"
					color="secondary"
				>
					Text
				</Button>
				<Button sx={{ height: 50 }} size="medium" variant="contained">
					Contained
				</Button>
				<Button
					sx={{ height: 50 }}
					size="medium"
					variant="outlined"
					color="secondary"
				>
					Outlined
				</Button>
			</Stack>
		</>
	);
};

export default MaterialUIButtons;
