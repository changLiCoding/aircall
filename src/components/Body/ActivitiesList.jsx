import React from "react";
import { useSelector } from "react-redux";
import ActivityCall from "./ActivityCall.jsx";
import styles from "./ActivityCall.module.css";
import useActivitiesHook from "../../hooks/useActivitiesHook.js";

function ActivitiesList({ activities }) {
	const { handleAddSameDayActivities } = useActivitiesHook();

	const { viewArchived } = useSelector((state) => state.activities);

	if (viewArchived) {
		activities = handleAddSameDayActivities(
			activities.filter((activity) => activity.is_archived)
		);
	} else {
		activities = handleAddSameDayActivities(
			activities.filter((activity) => !activity.is_archived)
		);
	}

	return (
		<div className={styles.activitiesContainer}>
			<div>
				{activities.map((activity) => (
					<ActivityCall
						key={activity.id}
						activity={activity}
					/>
				))}
			</div>
		</div>
	);
}

export default ActivitiesList;
