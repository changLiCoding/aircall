import React from "react";
import { useSelector, useDispatch } from "react-redux";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import ArchiveIcon from "@mui/icons-material/Archive";
import HomeIcon from "@mui/icons-material/Home";
import Paper from "@mui/material/Paper";

import styles from "./BottomNavigationComponent.module.css";
import { changeViewArchived } from "../../features/activitiesSlice.js";

function BottomNavigationComponent() {
	const { viewArchived } = useSelector((state) => state.activities);

	const dispatch = useDispatch();

	return (
		<Paper
			elevation={3}
			className={styles.bottomNaviContainer}>
			<BottomNavigation
				showLabels
				value={viewArchived ? 1 : 0}>
				<BottomNavigationAction
					onClick={() => {
						dispatch(changeViewArchived(false));
					}}
					icon={<HomeIcon />}
				/>
				<BottomNavigationAction
					onClick={() => {
						dispatch(changeViewArchived(true));
					}}
					icon={<ArchiveIcon />}
				/>
			</BottomNavigation>
		</Paper>
	);
}

export default BottomNavigationComponent;
