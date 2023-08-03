import React from "react";

import styles from "./ActivityCall.module.css";
import dateFormater from "../../utils/dateFormater.js";

function ActivityCall({ activity }) {
	const {
		call_type,
		created_at,
		direction,
		from,
		to,
		via,
		duration,
		is_archived,
	} = activity;

	const dateInStr = dateFormater(created_at);

	console.log(
		call_type,
		created_at,
		direction,
		from,
		to,
		via,
		duration,
		is_archived
	);

	return (
		<div className={styles.activityCallContainer}>
			<div className={styles.activityCallDivider}>{dateInStr}</div>
			<hr className={styles.activityCallDivider/>
		</div>
	);
}

export default ActivityCall;
