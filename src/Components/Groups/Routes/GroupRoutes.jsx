import React from "react";  
import { Routes, Route } from "react-router-dom";
import { GroupsLayout } from "../GroupsLayout";
import GroupsShortTable from "../ShortTableDetails/GroupsShortTable";
import RequestNewGroup from "../Insert/RequestNewGroup"
import InsertEdit from "../InsertEdit/InsertEdit";
import { acctionNew, acctionEdit } from "../../Shared/Global/GlobalProps";

export function GroupRoutes(){

	

	return(
		<div className="container">
			<Routes>
				{/* <Route element={<GroupsLayout />}>  */}
				<Route index element={<GroupsShortTable />}/>
				<Route path='new' element={<InsertEdit {...{...acctionNew}} />}/>
				<Route path='edit/:id' element={<InsertEdit {...{...acctionEdit}}/>} />
				{/* </Route> */}
			</Routes>
		</div>
	)
}

 
