import React from "react";
import { Link, Outlet } from "react-router-dom";

export function CoursesLayout  () {

	return(
		<div className="container">
			<Link to={'/courses'}>List Courses</Link>
			<Outlet />
		</div>
	)
}
