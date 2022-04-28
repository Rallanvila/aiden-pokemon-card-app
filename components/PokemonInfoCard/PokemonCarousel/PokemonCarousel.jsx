import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function PokemonCarousel({ footerCards, searchedPokemon }) {
	const router = useRouter();
	return (
		<footer className="py-4 mt-8 flex w-full max-h-96 overflow-auto">
			{footerCards.map((card) => (
				<img
					className="mx-2 hover:scale-105 transition-all duration-300"
					key={card.id}
					id={card.id}
					src={card.images.small}
					alt="card"
					// width={245}
					// height={337}
					onClick={(e) => {
						router.push(`/${searchedPokemon}/${e.target.id}`);
					}}
				/>
			))}
		</footer>
	);
}
