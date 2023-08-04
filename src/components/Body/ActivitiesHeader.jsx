import { Button } from "@mui/material";
import Inventory2TwoToneIcon from "@mui/icons-material/Inventory2TwoTone";
import React from "react";

import {
	useResetAllActivitiesMutation,
	useUpdateActivityMutation,
} from "../../services/activitiesApi.js";
import styles from "./ActivitiesHeader.module.css";

function ActivitiesHeader({ viewArchived, activities }) {
	const [resetAllActivities] = useResetAllActivitiesMutation();

	const [updateActivity] = useUpdateActivityMutation();

	const handleResetAllActivities = () => {
		if (viewArchived) {
			resetAllActivities().unwrap();
		} else {
			activities.forEach((activity) => {
				updateActivity({ id: activity.id, is_archived: true }).unwrap();
			});
		}
	};

	return (
		<div className={styles.activitiesHeaderContainer}>
			<Button
				variant='text'
				color='success'
				size='small'
				startIcon={<Inventory2TwoToneIcon />}
				onClick={handleResetAllActivities}
				style={{ textTransform: "none", color: "#25BC1D" }}>
				{!viewArchived ? "Archive all calls" : "Unarchive all calls"}
			</Button>
		</div>
	);
}

export default ActivitiesHeader;
