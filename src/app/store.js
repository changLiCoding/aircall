import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { activitiesApi } from "../services/activitiesApi.js";
import activitiesSlice from "../features/activitiesSlice.js";

export const store = configureStore({
	reducer: {
		activities: activitiesSlice,

		[activitiesApi.reducerPath]: activitiesApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(activitiesApi.middleware),
});

setupListeners(store.dispatch);
