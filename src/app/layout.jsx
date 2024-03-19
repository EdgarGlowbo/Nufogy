import Header from "@/components/Header";
import { josefin } from "@/fonts/fonts";
import "./globals.css";

export const metadata = {
	title: "Nufogy",
	description: "Nutrition Founded Gym",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`w-screen ${josefin.className} h-screen bg-main`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
