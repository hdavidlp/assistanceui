import React from "react";
import { Route, Routes } from 'react-router-dom';
import { CoursesLayout } from "../CoursesLayout";
import RequestNewCourse from "../Insert/RequestNewCourse";
import InsertEdit from "../InsertEdit/InsertEdit";
import CoursesShortTable from "../ShortTableDetails/CoursesShortTable";

export function CourseRoutes () {
	const acctionNew = {title:'new', acction:'new'}
	const acctionEdit = {title:'edit', acction:'edit'}

	return (
			<div className="container">
				<Routes>
					<Route index element={<CoursesShortTable />}/>
					{/*<Route path='new' element={<RequestNewCourse />}/>*/}
					<Route path='new' element={<InsertEdit {...{...acctionNew}}/>}/>
					<Route path='edit/:id' element={<InsertEdit {...{...acctionEdit}}/>}/>
				</Routes>
			</div>
	)
}

