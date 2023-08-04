import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import styles from "./CallInfo.module.css";
import dateFormater from "../../utils/dateFormater.js";
import { useUpdateActivityMutation } from "../../services/activitiesApi.js";
import CallIconGenerator from "../../utils/callIconGenerator.jsx";

function CallInfo({ activity }) {
	const { call_type, created_at, from, to } = activity;

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

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
				style={{ color: call_type === "missed" ? "#F31559" : "#CECE5A" }}
				onClick={handleClickOpen}>
				<CallIconGenerator callType={call_type} />
			</IconButton>

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'>
				<DialogTitle id='alert-dialog-title'>Call details</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						{`Do you want to call this ${call_type} from ${from}?`}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
					<Button
						onClick={handleClose}
						autoFocus>
						Call
					</Button>
				</DialogActions>
			</Dialog>

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
