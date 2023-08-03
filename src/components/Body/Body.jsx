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
				.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));

	console.log(data);
	console.log(activitiesWithDirection);

	console.log(activities.activities);

	return (
		<div>
			<ActivitiesHeader />
			<Divider>
				<Chip label='ALL CALLS' />
			</Divider>
			{isLoading ? (
				<div>
					<CircularProgress />
				</div>
			) : (
				<ActivitiesList activities={activitiesWithDirection} />
			)}
		</div>
	);
}

export default Body;
