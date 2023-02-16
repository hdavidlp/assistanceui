import React from "react";
import { Link, Outlet } from "react-router-dom";

export function PeriodLayout  () {

	return(
		<div className="container" >
			<Link to={'/periods'}>List Periods</Link><br />
			<Link to={'/periods/1'}>Period 1</Link><br />
			<Link to={'/periods/2'}>Period 2</Link><br />
			<Link to={'/periods/new'}>New Period</Link>
			<Outlet />
		</div>
	)
    
}

