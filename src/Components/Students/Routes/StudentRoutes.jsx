import React from "react";
import {Routes, Route } from "react-router-dom";
import StudentsShortTable from "../ShortTableDetails/StudentsShortTable";
import { StudentsLayout } from "../StudentsLayout";

import InsertEdit from "../InsertEdit/InsertEdit";
import { acctionNew, acctionEdit } from "../../Shared/Global/GlobalProps";


export function StudentRoutes (){
	return (
		<div className="container">
			<Routes>
				{/* <Route element={<StudentsLayout />}> */}
				<Route index element={<StudentsShortTable />}/>
				

				<Route path='new' element={<InsertEdit {...{...acctionNew}} />}/>
				<Route path='edit/:id' element={<InsertEdit {...{...acctionEdit}}/>} />
				{/* </Route> */}
			</Routes>
		</div>
	)
}

