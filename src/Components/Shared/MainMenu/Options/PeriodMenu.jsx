import React from "react";  
import { Link } from 'react-router-dom';





const PeriodMenu = () => {
	return (
		<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				Periods
			</a>
			<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
				<li><Link to={'/periods'} className='dropdown-item'>List</Link></li>
				<li><Link to={'/periods/new'} className='dropdown-item'>New Period</Link></li>
			</ul>
		</li>
	)
}

export default PeriodMenu