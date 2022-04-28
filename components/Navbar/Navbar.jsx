import React, { useState, useEffect } from "react";
import Image from "next/image";
import PokemonLogo from "/public/img/pokemonLogo.png";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import SearchInput, { createFilter } from "react-search-input";
import axios from "axios";
import Autocomplete from "react-autocomplete";

const Navbar = () => {
	const router = useRouter();
	const [formData, setFormData] = useState("");
	const [pokemon, setPokemon] = useState([]);
	const [pokemonImages, setPokemonImages] = useState([]);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = () => router.push(`/${formData}`);

	useEffect(() => {
		const allPokemon = async () => {
			const res = await fetch("https://api.pokemontcg.io/v2/cards/");
			const data = await res.json();
			setPokemon(data.data.map((pokemon) => pokemon.name));
			setPokemonImages(data.data.map((pokemon) => pokemon.images.small));
		};
	}, []);
	console.log(pokemon);

	function handleFormData(input) {
		setFormData(input.target.value);
	}

	return (
		<nav data-testid="NavBar">
			<div className="p-5 flex justify-between align-center h-auto">
				<Image
					src={PokemonLogo}
					alt="pokemon logo"
					layout="fixed"
					width={250}
					data-testid="logo"
				/>
				<form
					data-testid="search"
					onSubmit={handleSubmit(onSubmit)}
					className="flex items-center pointer-events-auto relative">
					<input
						// defaultValue="Search Pokemon"
						{...register("example")}
						onChange={(e) => handleFormData(e)}
						className="px-8 py-2 h-min rounded-full shadow-md opacity-90 focus:outline-none"
						type="text"
						name="pokemon-search"
						placeholder="Search Pokemon"
					/>
					<div className="absolute bottom-0"></div>
				</form>
			</div>
		</nav>
	);
};

export default Navbar;
