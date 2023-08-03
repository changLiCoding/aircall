import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";

import styles from "./BottomNavigationComponent.module.css";

function BottomNavigationComponent() {
	const [value, setValue] = React.useState(0);

	return (
		<Paper
			elevation={3}
			className={styles.bottomNaviContainer}>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}>
				<BottomNavigationAction icon={<RestoreIcon />} />
				<BottomNavigationAction icon={<FavoriteIcon />} />
				<BottomNavigationAction icon={<ArchiveIcon />} />
			</BottomNavigation>
		</Paper>
	);
}

export default BottomNavigationComponent;
