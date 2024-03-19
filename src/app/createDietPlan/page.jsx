import React from "react";
import WeekDaysBar from "./WeekDaysBar";
import CircleKcalProgress from "./CircleKcalProgress";

export default function CreateDietPlanPage() {
	return (
		<>
			<div className="bg-main w-screen h-screen">
				<div className="flex flex-col gap-5 w-screen h-1/2 bg-primary">
					<div className="w-screen items-center justify-center">
						<WeekDaysBar />
					</div>
					<CircleKcalProgress />
				</div>
			</div>
		</>
	);
}
