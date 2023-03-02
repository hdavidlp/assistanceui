import React from "react";
import { Route, Routes } from 'react-router-dom';
import AllInOne from "../AllInOne";


export function AllInOneRoutes () {

	return (
		<div className="container">
			<Routes>
				<Route index element={<AllInOne />}/>
			</Routes>
		</div>
	)
}

