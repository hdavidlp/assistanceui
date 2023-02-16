import React from "react";
import {Outlet, Link } from "react-router-dom";

export function GroupsLayout () {
	return(
		<div className="container">
			<Link to={'/groups'}>Group List</Link>
			<Outlet />
		</div>
	)
}


