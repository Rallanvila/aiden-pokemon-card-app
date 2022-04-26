import React, { useState, useEffect } from "react";
import Type from "../Type";

export default function Stats({ stats }) {
	console.log("stats: ", stats);
	// const weaknessType = stats.weaknesses[0].type;
	// const weaknessTypeMultiple = stats.weaknesses[0].value;
	// const resistanceType = stats.resistances[0].type;
	// const resistanceTypeMultiple = stats.resistances[0].value;
	// console.log(typeof weaknessType);

	return (
		<div className="flex justify-between px-10 pt-4">
			<div>
				<h3 className="text-lg font-bold">Weakness</h3>
				<div className="flex">
					<Type type={stats.weaknesses && stats.weaknesses[0].type} />
					<h3 className="ml-2 font-bold">
						{stats.weaknesses && stats.weaknesses[0].value}
					</h3>
				</div>
			</div>
			<div>
				<h3 className="text-lg font-bold">Resistance</h3>
				<div className="flex">
					{stats.resistances && (
						<>
							<Type type={stats.resistances[0].type} />
							<h3 className="ml-2 font-bold">{stats.resistances[0].value}</h3>
						</>
					)}
				</div>
			</div>
			<div>
				<h3 className="text-lg font-bold">Retreat Cost</h3>
				<div className="flex">
					{stats.retreatCost &&
						stats.retreatCost.map((cost, i) => <Type key={i} type={cost} />)}
				</div>
			</div>
		</div>
	);
}
