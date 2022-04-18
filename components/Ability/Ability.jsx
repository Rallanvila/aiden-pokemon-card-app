import React from "react";

export default function Ability({ name, description, cost }) {
	return (
		<div className="py-4 px-5 bg-white opacity-100">
			<div className="flex justify-between mb-2">
				<div className="flex">
					<h3 className="mr-4">🔥 🔥 🔥</h3>
					<h3 className="text-lg font-bold">{name}</h3>
				</div>
				<h3 className="text-lg font-bold">{cost}</h3>
			</div>
			<p className="max-w-sm">{description}</p>
		</div>
	);
}
