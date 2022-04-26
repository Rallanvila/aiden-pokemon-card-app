import React from "react";
import fire from "../public/fire.svg";
import lightning from "../public/img/lightning.svg";
import fighting from "../public/img/fighting.svg";
import normal from "../public/img/normal.svg";
import grass from "../public/img/grass.svg";
import psychic from "../public/img/psychic.svg";
import water from "../public/img/water.svg";
import Image from "next/image";

export default function Type({ type }) {
	const costEmblem = (cost) => {
		return cost === "Fire"
			? fire
			: cost === "Grass"
			? grass
			: cost === "Lightning"
			? lightning
			: cost === "Normal" || cost === "Colorless"
			? normal
			: cost === "Psychic"
			? psychic
			: cost === "Water"
			? water
			: cost === "Dark"
			? dark
			: "dont know";
	};
	console.log("type: ", type);
	console.log(costEmblem("Fire"));

	return (
		<>
			{type.map((t, i) => (
				<div key={i} className="mr-1 my-0 justify-center flex items-center">
					<Image src={costEmblem(t)} height={20} width={20} alt="element" />
				</div>
			))}
		</>
	);
}
