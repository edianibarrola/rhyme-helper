import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const poets = [
		"2pac",
		"Shakespeare",
		"Notorious B.I.G.",
		"MF Doom",
		"Harry Mack",
		"Eminem",
		"Maya Angelou",
		"Robert Frost",
		"Sarah Teasedale",
		"Walt Whitman"
	];
	let poet = "none";
	const randomPoet = poets.map(curr => {
		poet = curr;
		console.log(curr);
		return poet;
	});

	return (
		<div className="text-center mt-5">
			<h1>rhym:Ed</h1>
			<p>
				<h1>{randomPoet}</h1>
			</p>

			<p>Page under construction... check back soon!</p>
		</div>
	);
};
