export default function dateFormater(dateInStr) {
	const date = new Date(dateInStr);
	const monthStr = [
		"Jan.",
		"Feb.",
		"Mar.",
		"Apr.",
		"May",
		"Jun.",
		"Jul.",
		"Aug.",
		"Sep.",
		"Oct.",
		"Nov.",
		"Dec.",
	];
	const month = monthStr[date.getMonth()];
	const day = date.getDate();
	const year = date.getFullYear();

	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");
	const localTime = `${hours}:${minutes}`;
	const localDate = `${month} ${day}, ${year}`;

	return { localDate, localTime };
}
