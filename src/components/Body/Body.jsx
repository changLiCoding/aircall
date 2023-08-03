import React from "react";
import ArchiveIcon from "@mui/icons-material/Archive";
import { useSelector, useDispatch } from "react-redux";
import {
	Button,
	Skeleton,
	CircularProgress,
	Divider,
	Chip,
} from "@mui/material";
import RingVolumeTwoToneIcon from "@mui/icons-material/RingVolumeTwoTone";

import styles from "./Body.module.css";
import { useGetAllActivitiesQuery } from "../../features/activitiesApi.js";
import ActivitiesList from "./ActivitiesList.jsx";
import ActivitiesHeader from "./ActivitiesHeader.jsx";

function Body() {
	const activities = useSelector((state) => state.activities);

	const { data, isLoading } = useGetAllActivitiesQuery();

	const activitiesWithDirection = isLoading
		? []
		: data
				.filter((activity) => typeof activity.direction === "string")
				.sort((a, b) => Date.parse(a.created_at) - Date.parse(b.created_at))
				.map((activity, index, arr) => {
					const currentDate = new Date(activity.created_at);
					console.log(currentDate);
					const prevDate =
						index > 0 ? new Date(arr[index - 1].created_at) : null;

					const isSameDay =
						prevDate &&
						currentDate.getDate() === prevDate.getDate() &&
						currentDate.getMonth() === prevDate.getMonth() &&
						currentDate.getFullYear() === prevDate.getFullYear();

					return {
						call_type: activity.call_type,
						id: activity.id,
						is_archived: activity.is_archived,
						from: activity.from,
						to: activity.to,
						via: activity.via,
						duration: activity.duration,
						created_at: activity.created_at,
						direction: activity.direction,
						isSameDay,
					};
				});

	console.log(data);
	console.log(activitiesWithDirection);

	console.log(activities.activities);

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
