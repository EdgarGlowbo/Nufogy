import React from "react";
import WeekDayItem from "./WeekDayItem";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export default function WeekDaysBar() {
	const getWeekStart = () => {
		const currDate = new Date();

		const dayOfWeek = currDate.getDay();
		const diff = currDate.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); //Sets monday as start of the week

		return new Date(currDate.setDate(diff));
	};

	const getWeekDays = (startDate) => {
		const weekDays = []; // Use destructuring to get weekDayName, date tuples
		const startDayOfMonth = startDate.getDate();

		const currDate = new Date();
		for (let i = 0; i < 7; i++) {
			const dayOfMonth = startDayOfMonth + i;
			currDate.setDate(dayOfMonth);

			const narrowWeekDay = format(currDate, "eeeee", {
				locale: es,
			});

			weekDays.push([narrowWeekDay, dayOfMonth]);
		}

		return weekDays;
	};

	return (
		<div>
			{getWeekDays(getWeekStart()).map((weekDayTuple) => (
				<WeekDayItem key={weekDayTuple[0]} weekDayTuple={weekDayTuple} />
			))}
		</div>
	);
}
