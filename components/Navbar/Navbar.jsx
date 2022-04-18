import React, { useState } from "react";
import Image from "next/image";
import PokemonLogo from "/public/img/pokemonLogo.png";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const Navbar = () => {
	const router = useRouter();
	const [formData, setFormData] = useState("");
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = () => router.push(`/${formData}`);

	function handleFormData(input) {
		setFormData(input.target.value);
	}
	console.log(formData);

	console.log(watch("example"));
	return (
		<nav>
			<div className="p-5 flex justify-between align-center h-auto">
				<Image
					src={PokemonLogo}
					alt="pokemon logo"
					layout="fixed"
					width={250}
				/>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex items-center pointer-events-auto">
					<input
						// defaultValue="Search Pokemon"
						{...register("example")}
						onChange={(e) => handleFormData(e)}
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
