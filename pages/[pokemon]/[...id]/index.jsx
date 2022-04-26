import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import PokemonInfoCard from "../../../components/PokemonInfoCard/PokemonInfoCard";
import Image from "next/image";

const apiKey = process.env.POKEMON_CARD_API_KEY;

export default function PokemonInfo({ data }) {
	const [isLoading, setIsLoading] = useState(false);
	const [footerCards, setFooterCards] = useState([]);
	const router = useRouter();
	const pokemonInfo = data.data;

	useEffect(() => {
		setIsLoading(true);
		allCards();
		setIsLoading(false);
	}, []);

	const searchedPokemon = router.query.pokemon;
	const allCards = async () => {
		let res = await fetch(
			`https://api.pokemontcg.io/v2/cards/?q=name:${searchedPokemon}`,
		);
		let data = await res.json();
		return setFooterCards(data.data);
		// return data;
	};

	return (
		<>
			<div className="flex justify-between items-center">
				<div className="w-1/2">
					<Image
						src={pokemonInfo.images.large}
						alt="pokemon card image"
						className="w-9/12 rounded-lg shadow-xl mr-8"
						width={395}
						height={551}
					/>
				</div>
				<PokemonInfoCard pokemonInfo={pokemonInfo} />
			</div>

			<footer className="py-4 mt-8 flex w-full overflow-auto">
				{footerCards.map((card) => (
					<img
						className="mx-2 hover:scale-105 transition-all duration-300"
						key={card.id}
						id={card.id}
						src={card.images.small}
						alt="card"
						onClick={(e) => {
							router.push(`/${searchedPokemon}/${e.target.id}`);
						}}
					/>
				))}
			</footer>
		</>
	);
}

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
