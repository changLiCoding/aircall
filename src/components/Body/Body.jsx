import React, { useMemo } from "react";
import {
	Button,
	Skeleton,
	CircularProgress,
	Divider,
	Chip,
} from "@mui/material";
import RingVolumeTwoToneIcon from "@mui/icons-material/RingVolumeTwoTone";

import styles from "./Body.module.css";
import {
	useGetAllActivitiesQuery,
	useGetActivityByIdQuery,
} from "../../features/activitiesApi.js";
import ActivitiesList from "./ActivitiesList.jsx";
import ActivitiesHeader from "./ActivitiesHeader.jsx";

function Body() {
	const { data, isLoading } = useGetAllActivitiesQuery();

	const activitiesWithDirection = useMemo(() => {
		if (isLoading) return [];

		return data
			.filter((activity) => typeof activity.direction === "string")
			.sort((a, b) => Date.parse(a.created_at) - Date.parse(b.created_at));
	}, [data, isLoading]);

	console.log(data);
	console.log(activitiesWithDirection);

	return (
		<div>
			<ActivitiesHeader />
			<Divider>
				<Chip
					label='All Calls'
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
				<ActivitiesList activities={activitiesWithDirection} />
			)}
		</div>
	);
}

export default Body;
