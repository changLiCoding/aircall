import React from "react";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import styles from "./CallInfo.module.css";
import dateFormater from "../../utils/dateFormater.js";
import { useUpdateActivityMutation } from "../../services/activitiesApi.js";
import CallIconGenerator from "../../utils/callIconGenerator.jsx";

function CallInfo({ activity }) {
	const { call_type, created_at, from, to } = activity;

	const { viewArchived } = useSelector((state) => state.activities);

	const { localTime } = dateFormater(created_at);

	const [updateActivity] = useUpdateActivityMutation();

	const handleArchive = () => {
		updateActivity({ id: activity.id, is_archived: !viewArchived }).unwrap();
	};

	return (
		<div className={styles.callInfoContainer}>
			<IconButton
				className={styles.callInfoIconButton}
				size='small'
				style={{ color: call_type === "missed" ? "#F31559" : "#CECE5A" }}>
				<CallIconGenerator callType={call_type} />
			</IconButton>

			<div className={styles.callInfo}>
				<div className={styles.callInfoFrom}>
					<span>
						{from ? `+${from}` : "Unknown"}{" "}
						{call_type === "missed" ? "missed" : "answered"}
					</span>
					<span>{`tried to call ${to}`}</span>
				</div>
				<IconButton
					aria-label='archive'
					size='small'
					onClick={handleArchive}>
					<ArchiveOutlinedIcon fontSize='inherit' />
				</IconButton>
			</div>

			<div className={styles.callInfoDuration}>{localTime}</div>
		</div>
	);
}

export default CallInfo;
