import React from "react";
import Image from "next/image";
import PokemonLogo from "/public/img/pokemonLogo.png";

const Navbar = () => {
	return (
		<nav>
			<div className="p-5 flex justify-between align-center h-auto">
				<Image
					src={PokemonLogo}
					alt="pokemon logo"
					layout="fixed"
					width={250}
				/>
				<form className="flex items-center pointer-events-auto">
					<input
						className="px-8 py-2 h-min rounded-full shadow-md opacity-90"
						type="text"
						name="pokemon-search"
						placeholder="Search Pokemon"
					/>
				</form>
			</div>
		</nav>
	);
};

export default Navbar;
