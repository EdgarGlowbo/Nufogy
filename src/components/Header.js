import React from "react";
import { FaApple, FaUserCircle } from "react-icons/fa";

export default function Header() {
	return (
		<header>
			<button>
				{/* Nufogy icon */}
				<FaApple />
			</button>
			<span>Home</span>
			<button>
				<FaUserCircle />
			</button>
		</header>
	);
}
