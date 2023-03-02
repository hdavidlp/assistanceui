import React from "react";
import {Routes, Route } from "react-router-dom";
import StudentsShortTable from "../ShortTableDetails/StudentsShortTable";
import { StudentsLayout } from "../StudentsLayout";
import RequestNewStudent from '../Insert/RequestNewStudent'


export function StudentRoutes (){
	return (
		<div className="container">
			<Routes>
				{/* <Route element={<StudentsLayout />}> */}
				<Route index element={<StudentsShortTable />}/>
				<Route path="new"  element={<RequestNewStudent />}/>
				{/* </Route> */}
			</Routes>
		</div>
	)
}

