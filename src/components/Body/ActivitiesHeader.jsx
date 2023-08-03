import { Button } from "@mui/material";
import Inventory2TwoToneIcon from "@mui/icons-material/Inventory2TwoTone";
import React from "react";

import styles from "./ActivitiesHeader.module.css";

function ActivitiesHeader() {
	return (
		<div className={styles.activitiesHeaderContainer}>
			<Button
				variant='text'
				color='success'
				size='small'
				startIcon={<Inventory2TwoToneIcon />}
				style={{ textTransform: "none", color: "#25BC1D" }}>
				Archive all calls
			</Button>
		</div>
	);
}

export default ActivitiesHeader;
