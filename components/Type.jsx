import React from "react";
import fire from "../public/fire.svg";
import lightning from "../public/img/lightning.svg";
import fighting from "../public/img/fighting.svg";
import normal from "../public/img/normal.svg";
import grass from "../public/img/grass.svg";
import psychic from "../public/img/psychic.svg";
import water from "../public/img/water.svg";
import metal from "../public/img/metal.svg";
import darkness from "../public/img/darkness.svg";
import Image from "next/image";
import PokemonLogo from "../public/img/PokemonLogo.png";

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
			: cost === "Fighting"
			? fighting
			: cost === "Metal"
			? metal
			: cost === "Darkness"
			? darkness
			: PokemonLogo;
	};
	return (
		<>
			{typeof type === "object" ? (
				type.map((t, i) => (
					<div key={i} className="mr-1 my-0 justify-center flex items-center">
						<Image src={costEmblem(t)} height={20} width={20} alt="element" />
					</div>
				))
			) : typeof type === "string" ? (
				<div className="mr-1 my-0 justify-center flex items-center">
					<Image src={costEmblem(type)} height={20} width={20} alt="element" />
				</div>
			) : (
				"invalid type"
			)}
		</>
	);
}
