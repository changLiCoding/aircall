import React from "react";
import PhoneMissedTwoToneIcon from "@mui/icons-material/PhoneMissedTwoTone";
import { IconButton } from "@mui/material";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import styles from "./CallInfo.module.css";
import dateFormater from "../../utils/dateFormater.js";
// import { useUpdateActivityMutation } from "../../features/activitiesApi.js";

function CallInfo({ activity }) {
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

	const { localTime } = dateFormater(created_at);

	// const [updateActivity, { isLoading, data, status }] =
	// 	useUpdateActivityMutation();

	// const handleArchive = async () => {
	// 	console.log("Activity been archived ", activity.id);
	// 	try {
	// 		const result = await updateActivity({
	// 			id: activity.id,
	// 			is_archived: true,
	// 		});
	// 		console.log(result);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	return (
		<div className={styles.callInfoContainer}>
			<IconButton
				className={styles.callInfoIconButton}
				size='small'
				style={{ color: "#CECE5A" }}>
				<PhoneMissedTwoToneIcon />
			</IconButton>

			<div className={styles.callInfo}>
				<div className={styles.callInfoFrom}>{from || "Unknown"}</div>
				<IconButton
					aria-label='archive'
					size='small'
					// onClick={handleArchive}
				>
					<ArchiveOutlinedIcon fontSize='inherit' />
				</IconButton>
			</div>

			<div className={styles.callInfoDuration}>{localTime}</div>
		</div>
	);
}

export default CallInfo;
