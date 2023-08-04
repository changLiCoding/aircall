import React from "react";

import styles from "./ActivityCall.module.css";
import dateFormater from "../../utils/dateFormater.js";
import CallInfo from "./CallInfo.jsx";

function ActivityCall({ activity }) {
	const { created_at, isSameDay } = activity;

	const { localDate } = dateFormater(created_at);

	return (
		<div className={styles.activityCallContainer}>
			<div className={isSameDay ? styles.hiden : null}>{localDate}</div>
			<hr className={isSameDay ? styles.hiden : styles.activityCallDivider} />
			<CallInfo activity={activity} />
		</div>
	);
}

export default ActivityCall;
