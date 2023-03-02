import React from "react";
import { Link, Outlet } from "react-router-dom";

export function PeriodLayout  () {

	return(
		<div className="container" >
			{/* <nav className="sub-menu">
				<ul>
					<li><Link to={'/periods'} className='sub-menu-link'>List Periods</Link><br /></li>
					<li><Link to={'/periods/1'} className='sub-menu-link'>Period 1</Link><br /></li>
					<li><Link to={'/periods/2'} className='sub-menu-link'>Period 2</Link><br /></li>
					<li><Link to={'/periods/new'} className='sub-menu-link'>New Period</Link></li>
					<Outlet />
				</ul>
			</nav> */}
		</div>
	)
    
}

