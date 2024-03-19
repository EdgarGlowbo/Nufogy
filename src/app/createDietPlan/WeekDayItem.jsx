"use client";
import clsx from "clsx";

export default function WeekDayItem({ weekDay, status, setSelectedWeekDay }) {
	const { narrowWeekDay, dayOfMonth, weekDayID } = weekDay;

	return (
		<button
			className={clsx("flex flex-col m-1 px-1.5 py-1 items-center bg-primary", {
				"text-text-dark-dim": status === "not-selected",
				" text-text-dark": status === "selected",
			})}
			onClick={() => setSelectedWeekDay(weekDayID)}
		>
			<span className="text-lg">{narrowWeekDay}</span>
			<span className="text-lg">{dayOfMonth}</span>
			<span
				className={clsx("rounded-full w-1 h-1", {
					"bg-primary": status === "not-selected",
					"bg-primary-accent": status === "selected",
				})}
			></span>
		</button>
	);
}
