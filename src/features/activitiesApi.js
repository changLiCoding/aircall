import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const activitiesApi = createApi({
	reducerPath: "activitiesApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://cerulean-marlin-wig.cyclic.app/",
	}),
	tagTypes: ["Activities"],
	endpoints: (builder) => ({
		getAllActivities: builder.query({
			query: () => "activities",
		}),
		getActivityById: builder.query({
			query: (id) => `activities/${id}`,
		}),
		updateActivity: builder.mutation({
			query: ({ id, patch }) => ({
				url: `activities/${id}`,
				method: "PATCH",
				body: patch,
			}),
			transformResponse: (response) => {
				console.log(response);

				return response.data;
			},
		}),
	}),
});

export const {
	useGetAllActivitiesQuery,
	useGetActivityByIdQuery,
	useUpdateActivityMutation,
} = activitiesApi;
