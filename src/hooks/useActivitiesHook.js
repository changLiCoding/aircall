const useActivitiesHook = () => {
	const handleAddSameDayActivities = (activities) => {
		const AddSameDayActivities = activities.map((activity, index, arr) => {
			const currentDate = new Date(activity.created_at);
			const prevDate = index > 0 ? new Date(arr[index - 1].created_at) : null;

			const isSameDay =
				prevDate &&
				currentDate.getDate() === prevDate.getDate() &&
				currentDate.getMonth() === prevDate.getMonth() &&
				currentDate.getFullYear() === prevDate.getFullYear();

			return {
				call_type: activity.call_type,
				id: activity.id,
				is_archived: activity.is_archived,
				from: activity.from,
				to: activity.to,
				via: activity.via,
				duration: activity.duration,
				created_at: activity.created_at,
				direction: activity.direction,
				isSameDay,
			};
		});
		return AddSameDayActivities;
	};
	return { handleAddSameDayActivities };
};

export default useActivitiesHook;
