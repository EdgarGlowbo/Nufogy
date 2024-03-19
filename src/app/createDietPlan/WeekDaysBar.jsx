"use client";

import React, { useState } from "react";
import WeekDayItem from "./WeekDayItem";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export default function WeekDaysBar() {
	const [selectedWeekDay, setSelectedWeekDay] = useState(new Date().getDay());

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
			const weekDayID = currDate.getDay();

			const narrowWeekDay = (
				weekDayID === 3
					? "X"
					: format(currDate, "eeeee", {
							locale: es,
					  })
			).toUpperCase();

			weekDays.push({ narrowWeekDay, dayOfMonth, weekDayID });
		}

		return weekDays;
	};

	return (
		<div className="bg-primary gap-2">
			{getWeekDays(getWeekStart()).map((weekDay) => {
				const { weekDayID } = weekDay;

				return (
					<WeekDayItem
						key={weekDayID}
						weekDay={weekDay}
						status={weekDayID === selectedWeekDay ? "selected" : "not-selected"}
						setSelectedWeekDay={setSelectedWeekDay}
					/>
				);
			})}
		</div>
	);
}
