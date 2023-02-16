import React from "react";
import { Route, Routes } from 'react-router-dom';
import { CoursesLayout } from "../CoursesLayout";
import CoursesShortTable from "../ShortTableDetails/CoursesShortTable";

export function CourseRoutes () {

	return (
			<div className="container">
				<Routes>
					<Route element={<CoursesLayout />}>
						<Route index element={<CoursesShortTable />}/>
					</Route>
				</Routes>
			</div>
	)
}

