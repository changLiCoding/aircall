import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	viewArchived: false,
};

const activitiesSlice = createSlice({
	name: "activities",

	initialState,

	reducers: {
		changeViewArchived: (state, action) => {
			console.log(action);
			state.viewArchived = action.payload;
		},
	},
});

export const { changeViewArchived } = activitiesSlice.actions;

export default activitiesSlice.reducer;
