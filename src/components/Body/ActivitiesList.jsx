import React from "react";
import ActivityCall from "./ActivityCall.jsx";
import styles from "./ActivityCall.module.css";

function ActivitiesList({ activities }) {
	return (
		<div className={styles.activitiesContainer}>
			<div>
				{activities.map((activity) => {
					console.log(activity.created_at);
					return (
						<ActivityCall
							key={activity.id}
							activity={activity}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default ActivitiesList;
