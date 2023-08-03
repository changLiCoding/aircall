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
import { useGetAllActivitiesQuery } from "../../features/activitiesApi.js";
import ActivitiesList from "./ActivitiesList.jsx";

function Body() {
	const activities = useSelector((state) => state.activities);

	// const { data, error, isLoading } = useGetAllActivitiesQuery();

	// console.log(data);

	// const { data } = useGetAllActivites();

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
			Body
			<h2>Activities</h2>
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
