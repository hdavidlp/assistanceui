import React from "react";
import {Outlet, Link } from "react-router-dom";


export function StudentsLayout () {
	return (
		<div className="container">
			<Link to={'/students'}>Students List</Link>
			<Outlet />
		</div>
	)
}


