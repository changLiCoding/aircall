import React from "react";
import ActivityCall from "./ActivityCall.jsx";

function ActivitiesList({ activities }) {
	return (
		<div>
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
