import React from "react";
import Type from "../Type";

export default function Ability({ name, description, type, damage }) {
	return (
		<div className="py-4 px-5 bg-white opacity-100">
			<div className="flex justify-between mb-2">
				<div className="flex">
					<Type type={type} className="mr-4" />
					<h3 className="text-lg font-bold">{name}</h3>
				</div>
				<h3 className="text-lg font-bold">{damage}</h3>
			</div>
			<p className="max-w-sm">{description}</p>
		</div>
	);
}
