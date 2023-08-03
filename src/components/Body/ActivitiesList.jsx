import React from "react";

function ActivitiesList({ activities }) {
	return (
		<div>
			ActivitiesList
			<div>
				{activities.map((activity) => {
					console.log(activity.created_at);
					return (
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
					);
				})}
			</div>
		</div>
	);
}

export default ActivitiesList;
