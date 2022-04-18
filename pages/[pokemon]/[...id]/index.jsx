import React, { useState, useEffect } from "react";
import Ability from "../../../components/Ability/Ability";
import Stats from "../../../components/Stats/Stats";
import { useRouter } from "next/router";
import Link from "next/link";

const apiKey = process.env.POKEMON_CARD_API_KEY;

export default function PokemonInfo({ data }) {
	const pokemonInfo = data.data;
	console.log(pokemonInfo);

	return (
		<div className="flex justify-between items-center">
			<div className="w-1/2">
				<img
					src={pokemonInfo.images.large}
					alt="pokemon card image"
					className="w-9/12 rounded-lg shadow-xl"
				/>
			</div>

			<article className="w-1/2 bg-slate-200/70 rounded-3xl max-w-lg h-min py-10 shadow-xl">
				<h1 className="px-5 pb-2 text-4xl font-extrabold">
					{pokemonInfo.name}
				</h1>
				<div className="flex justify-between px-5 ">
					<h2 className="font-bold text-xl">{`Series: ${pokemonInfo.set.series}`}</h2>
					<div className="flex items-baseline">
						<h2 className="text-sm">HP</h2>
						<span className="text-xl font-bold mr-2">{pokemonInfo.hp}</span>
						<h2>🔥</h2>
					</div>
				</div>
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
						cost={attack.cost[0]}
					/>
				))}
				<Stats stats={pokemonInfo} />
				{/* <h2>{pokemonInfo.rarity}</h2> */}
			</article>
		</div>
	);
}

// export async function getStaticProps(context) {
// 	const res = await fetch(`https://api.pokemontcg.io/v2/cards/`);
// 	const data = await res.json();
// 	return {
// 		props: {
// 			data,
// 		},
// 	};
// }
export async function getServerSideProps(context) {
	const id = context.params.id;
	const res = await fetch(`https://api.pokemontcg.io/v2/cards/${id}`);
	const data = await res.json();

	return {
		props: {
			data,
		},
	};
}
