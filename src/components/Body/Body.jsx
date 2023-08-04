import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { CircularProgress, Divider, Chip } from "@mui/material";
import RingVolumeTwoToneIcon from "@mui/icons-material/RingVolumeTwoTone";
import ActivitiesHeader from "./ActivitiesHeader.jsx";

import styles from "./Body.module.css";
import { useGetAllActivitiesQuery } from "../../services/activitiesApi.js";
import ActivitiesList from "./ActivitiesList.jsx";
import useActivitiesHook from "../../hooks/useActivitiesHook.js";

function Body() {
	const { data, isLoading } = useGetAllActivitiesQuery();
	const { handleAddSameDayActivities } = useActivitiesHook();

	const { viewArchived } = useSelector((state) => state.activities);

	const activitiesWithDirection = useMemo(() => {
		if (isLoading) return [];

		return handleAddSameDayActivities(
			data
				.filter((activity) => typeof activity.call_type === "string")
				.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
				.filter((activity) => activity.is_archived === viewArchived)
		);
	}, [data, isLoading, viewArchived, handleAddSameDayActivities]);

	return (
		<div>
			<ActivitiesHeader
				viewArchived={viewArchived}
				activities={activitiesWithDirection}
			/>
			<Divider>
				<Chip
					label={viewArchived ? "All Archived Calls" : "All Calls"}
					variant='outlined'
					size='small'
					icon={<RingVolumeTwoToneIcon color='#7EAA92' />}
					style={{
						paddingLeft: "1.6rem",
						paddingRight: "1.6rem",
						color: "#7EAA92",
					}}
				/>
			</Divider>
			{isLoading ? (
				<div className={styles.circularProgressContainer}>
					<CircularProgress />
				</div>
			) : (
				<ActivitiesList
					activities={activitiesWithDirection}
					viewArchived={viewArchived}
				/>
			)}
		</div>
	);
}

export default Body;
