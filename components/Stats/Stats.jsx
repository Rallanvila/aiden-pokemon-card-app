import React from "react";

export default function Stats() {
	return (
		<div className="flex justify-between px-10 pt-4">
			<div>
				<h3 className="text-lg font-bold">Weakness</h3>
				<div className="flex">
					<h3>💦</h3>
					<h3 className="ml-2 font-bold">x 2</h3>
				</div>
			</div>
			<div>
				<h3 className="text-lg font-bold">Resistance</h3>
				<div className="flex">
					<h3>💦</h3>
					<h3 className="ml-2 font-bold">x 2</h3>
				</div>
			</div>
			<div>
				<h3 className="text-lg font-bold">Retreat Cost</h3>
				<h3>💦</h3>
			</div>
		</div>
	);
}
