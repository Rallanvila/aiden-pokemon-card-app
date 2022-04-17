import React from "react";
import Ability from "../../components/Ability/Ability";
import Stats from "../../components/Stats/Stats";

const apiKey = process.env.POKEMON_CARD_API_KEY;

export default function PokemonInfo({ data }) {
	let pokemon = data.data.filter((d) => d.name === "Charizard");
	const thisPokemon = pokemon[0];
	console.log(thisPokemon);
	let test = thisPokemon.abilities.map((a) => a);

	return (
		<div className="flex justify-between items-center">
			<div className="w-1/2">
				<img
					src={thisPokemon.images.large}
					alt="pokemon card image"
					className="w-9/12 rounded-lg shadow-xl"
				/>
			</div>

			<article className="w-1/2 bg-slate-200/70 rounded-3xl max-w-lg h-min py-10 shadow-xl">
				<h1 className="px-5 pb-2 text-4xl font-extrabold">Charizard</h1>
				<div className="flex justify-between px-5 ">
					<h2 className="font-bold text-xl">Pokemon-VMAX</h2>
					<div className="flex items-baseline">
						<h2 className="text-sm">HP</h2>
						<span className="text-xl font-bold mr-2">320</span>
						<h2>🔥</h2>
					</div>
				</div>
				<h2 className="px-5 pb-4 text-xl">Evolves From: Charmander</h2>
				<Ability />
				<Ability />
				<Ability />
				<Stats />
			</article>
		</div>
	);
}

export async function getStaticProps(context) {
	const res = await fetch(`https://api.pokemontcg.io/v2/cards/`);
	const data = await res.json();
	return {
		props: {
			data,
		},
	};
}
