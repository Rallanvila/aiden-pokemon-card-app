import Link from "next/link";
import React from "react";
import Ability from "../Ability/Ability";
import Type from "../Type";
import Stats from "../Stats/Stats";

export default function PokemonInfoCard({ pokemonInfo }) {
	console.log("pokemonInfo: ", pokemonInfo);
	return (
		<article className="w-1/2 bg-slate-200/70 rounded-3xl max-w-lg h-min py-10 shadow-xl">
			<h1 className="px-5 pb-2 text-4xl font-extrabold">{pokemonInfo.name}</h1>
			<div className="flex justify-between px-5 ">
				<h2 className="font-bold text-xl">{`Series: ${pokemonInfo.set.series}`}</h2>
				<div className="flex items-baseline">
					<h2 className="text-sm">HP</h2>
					<span className="text-xl font-bold mr-2">{pokemonInfo.hp}</span>
					{/* <Cost cost={pokemonInfo.cost} /> */}
					<h2>🔥</h2>
				</div>
			</div>
			{pokemonInfo.evolvesFrom && (
				<h2 className="px-5 pb-4 text-xl">
					Evolves From:{" "}
					<Link
						className="hover:text-blue-800 transition-all duration-300 ease-in hover:font-semibold"
						href={`/${pokemonInfo.evolvesFrom}`}>
						{pokemonInfo.evolvesFrom}
					</Link>
				</h2>
			)}
			{pokemonInfo.evolvesTo && (
				<h2 className="px-5 pb-4 text-xl">
					Evolves To:{" "}
					<Link
						className="hover:text-blue-800 transition-all duration-300 ease-in hover:font-semibold"
						href={`/${pokemonInfo.evolvesTo[0]}`}>
						{pokemonInfo.evolvesTo[0]}
					</Link>
				</h2>
			)}
			{pokemonInfo.attacks.map((attack, i) => (
				<Ability
					key={i}
					name={attack.name}
					description={attack.text}
					type={attack.cost}
					damage={attack.damage}
				/>
			))}
			<Stats stats={pokemonInfo} />
			{/* <h2>{pokemonInfo.rarity}</h2> */}
		</article>
	);
}
