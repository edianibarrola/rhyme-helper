import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Register } from "../component/registerModal";
import "../../styles/sign_in.scss";

// Add a register component that popups when the link is clicked that allows new users to register from the modal without going to a diff view.

export const SignIn = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="mx-auto">
			<h1 className="display-4">Sign in: </h1>

			<hr className="my-4" />
			<input type="text" />
			<input type="text" />
			<Register />
		</div>
	);
};
