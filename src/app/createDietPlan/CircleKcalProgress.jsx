"use client";
import React, { useState } from "react";
import { Circle } from "rc-progress";

export default function CircleKcalProgress() {
	const [noBtnText, setNoBtnText] = useState("No");
	const [clickCount, setClickCount] = useState(0);

	const messages = ["Seguro?", "No andes de envidioso", "Qué fácil", "🥱🥱🥱"];

	const handleNoClick = () => {
		console.log(clickCount);
		setNoBtnText(
			messages.length > clickCount
				? messages[clickCount]
				: messages[messages.length - 1]
		);
		setClickCount(clickCount + 1);
	};

	return (
		<>
			{/* Circular kcal count */}
			<div className="mx-auto rounded-full w-[9.8125rem] h-[9.8125rem] bg-main">
				<Circle
					percent={45}
					strokeColor={"#B1476A"}
					trailColor="#7383A3"
					strokeWidth={16}
					strokeLinecap="square"
				/>
			</div>
			<h1>¿Soy el mejor front-ender?</h1>
			<div className="flex gap-2 mx-auto">
				<button
					className=" bg-green-500"
					style={{
						width: `${4 * (1 + clickCount * 0.1)}rem`,
						height: `${1.5 * (1 + clickCount * 0.1)}rem`,
					}}
				>
					Sí
				</button>
				<button
					className="min-w-16 h-fit bg-primary-accent"
					onClick={handleNoClick}
				>
					{noBtnText}
				</button>
			</div>
		</>
	);
}
