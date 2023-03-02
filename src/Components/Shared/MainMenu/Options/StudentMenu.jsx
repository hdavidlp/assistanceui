import React from "react";  

import { Link } from "react-router-dom";

const StudentMenu = () => {
    return (
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Students
				</a>
				<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
					<li><Link to={'/students'} className='dropdown-item'>List</Link></li>
					<li><Link to={'/students/new'} className='dropdown-item'>New Student</Link></li>
				</ul>	
			</li>
    )
}

export default StudentMenu