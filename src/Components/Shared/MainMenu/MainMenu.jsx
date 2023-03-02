import React from "react";  
import { Outlet } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css"
import PeriodMenu from "./Options/PeriodMenu";
import CourseMenu from "./Options/CourseMenu";
import GroupMenu from "./Options/GroupMenu";
import StudentMenu from "./Options/StudentMenu";
import HomeMenu from "./Options/HomeMenu";
import AllInOneMenu from "./Options/AllInOneMenu";


const MainMenu = () => {
	return (
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			{/* <a class="navbar-brand" href="#">Navbar</a> */}
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav">
					<HomeMenu />
					<PeriodMenu />
					<CourseMenu />
					<GroupMenu />
					<StudentMenu />
					<AllInOneMenu />
					<Outlet />
				</ul>
			</div>
		</div>
	</nav>
	)

}

export default  MainMenu



{/* <nav className='main-menu'>
	<ul>
		<li><Link to={'/'} className='menu-link'>Home</Link> </li>
		<li><Link to={'/periods'} className='menu-link'>Periods</Link></li>
		<li><Link to={'/courses'} className='menu-link'>Courses</Link></li>
		<li><Link to={'/groups'} className='menu-link'>Groups</Link></li>
		<li><Link to={'/students'} className='menu-link'>Students</Link></li>
		<li><Link to={'/'} className='menu-link'>Extra</Link></li>
	</ul>
</nav> 
 */}
