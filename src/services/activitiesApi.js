import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

console.log("activitiesApi.js");

export const activitiesApi = createApi({
	reducerPath: "activitiesApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://cerulean-marlin-wig.cyclic.app/",
	}),
	tagTypes: ["Activities"],
	endpoints: (builder) => ({
		getAllActivities: builder.query({
			query: () => "activities",
			providesTags: ["Activities"],
		}),
		getActivityById: builder.query({
			query: (id) => `activities/${id}`,
			providesTags: () => ["Activities"],
		}),
		resetAllActivities: builder.mutation({
			query: () => ({
				url: "reset",
				method: "PATCH",
			}),

			transformResponse: (response) => response.data,
			invalidatesTags: ["Activities"],
		}),

		updateActivity: builder.mutation({
			query: ({ id, is_archived }) => ({
				url: `activities/${id}`,
				method: "PATCH",
				body: { is_archived },
			}),
			transformResponse: (response) => response.data,
			invalidatesTags: ["Activities"],
		}),
	}),
});

export const {
	useGetAllActivitiesQuery,
	useGetActivityByIdQuery,
	useUpdateActivityMutation,
	useResetAllActivitiesMutation,
} = activitiesApi;
