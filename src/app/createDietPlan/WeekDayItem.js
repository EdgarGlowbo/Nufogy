import React from "react";

export default function WeekDayItem({ weekDayTuple }) {
	const [narrowWeekDay, dayOfMonth] = weekDayTuple;

	return (
		<button>
			<span>{narrowWeekDay}</span>
			<span>{dayOfMonth}</span>
		</button>
	);
}
