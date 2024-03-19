import React from "react";
import { FaApple, FaUserCircle } from "react-icons/fa";

export default function Header() {
	return (
		<header className="w-screen items-center">
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
