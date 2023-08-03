import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const activitiesApi = createApi({
	reducerPath: "activitiesApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://cerulean-marlin-wig.cyclic.app/",
	}),
	endpoints: (builder) => ({
		getAllActivities: builder.query({
			query: () => "activities",
		}),
		getActivityById: builder.query({
			query: (id) => `activities/${id}`,
		}),
	}),
});

export const { useGetAllActivitiesQuery, useGetActivityByIdQuery } =
	activitiesApi;
