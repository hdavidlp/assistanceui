import React from "react";  
import { Routes, Route } from "react-router-dom";
import { GroupsLayout } from "../GroupsLayout";
import GroupsShortTable from "../ShortTableDetails/GroupsShortTable";

export function GroupRoutes(){
	return(
		<div className="container">
			<Routes>
				<Route element={<GroupsLayout />}> 
					<Route index element={<GroupsShortTable />}/>
				</Route>
			</Routes>
		</div>
	)
}

 
