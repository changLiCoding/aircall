import React from "react";
import ArchiveIcon from "@mui/icons-material/Archive";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "@mui/material";
import { useGetAllActivitiesQuery } from "../../features/activitiesApi.js";

function Body() {
	const activities = useSelector((state) => state.activities);

	// const { data, error, isLoading } = useGetAllActivitiesQuery();

	// console.log(data);

	// const { data } = useGetAllActivites();

	const { data, isLoading } = useGetAllActivitiesQuery();

	const activitiesWithDirection = isLoading
		? []
		: data.filter((activity) => typeof activity.direction === "string");

	console.log(data);
	console.log(activitiesWithDirection);

	console.log(activities.activities);

	return (
		<div>
			Body
			<h2>Activities</h2>
			<Button variant='contained'>
				ArchiveIcon
				<ArchiveIcon />
			</Button>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<div>
					{activitiesWithDirection.map((activity) => (
						<div key={activity.id}>
							<div>
								Direction:
								{activity.direction}
							</div>
							<div>
								From:
								{activity.from}
							</div>
							<div>
								To:
								{activity.to}
							</div>
						</div>
					))}
				</div>
			)}
			{/* {activities.activities.map((activity) => (
				<div key={activity.id}>
					<div>
						Direction:
						{activity.direction}
					</div>
					<div>
						From:
						{activity.from}
					</div>
					<div>
						To:
						{activity.to}
					</div>
				</div>
			))} */}
		</div>
	);
}

export default Body;
