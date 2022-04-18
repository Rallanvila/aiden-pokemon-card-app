import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "../../components/Loading/Loading";
import axios from "axios";

const apiKey = process.env.POKEMON_CARD_API_KEY;

export default function Pokemon({ data }) {
	const router = useRouter();
	const { pokemon } = router.query;
	const [cards, setCards] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getAllCards = async () => {
			setIsLoading(true);

			const response = await axios.get(
				`https://api.pokemontcg.io/v2/cards/?q=name:${pokemon}`,
			);

			setCards(response.data.data);
			if (cards.length) return setIsLoading(false);
		};
		getAllCards();
	}, []);

	useEffect(() => {
		cards.length && setIsLoading(false);
	}, [cards]);

	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-auto gap-8">
			{isLoading ? (
				<Loading />
			) : (
				cards.map((p, id) => (
					<div key={p.id} className="max-w-xs">
						<img
							id={p}
							onClick={(e) => console.log(e)}
							src={p.images.small}
							alt="pokemon card"
							className="w-full shadow-lg hover:scale-105 rounded-lg  cursor-pointer transition-all ease-in-out duration-300 three-d"
						/>
					</div>
				))
			)}
		</div>
	);
}

export async function getServerSideProps(context) {
	const pokemonName = context.params.pokemon;
	const res = await fetch(
		`https://api.pokemontcg.io/v2/cards/?q=name:${pokemonName}`,
	);
	const data = await res.json();

	return {
		props: {
			data,
		},
	};
}
