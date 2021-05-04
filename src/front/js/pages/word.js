import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { WordGenerator } from "../component/wordGenerator";
import "../../styles/word.scss";

export const Word = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="jumbotron">
			<h1 className="display-4">Word Page: </h1>
			<hr className="my-4" />
			<WordGenerator />{" "}
		</div>
	);
};
