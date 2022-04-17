import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children }) {
	return (
		<div className="max-w-screen-xl mx-auto">
			<Navbar />
			<main className="px-6">{children}</main>
		</div>
	);
}
