import React from "react";  
import { Link } from 'react-router-dom';

const CourseMenu = () => {
    return (
        


        <li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				Courses
			</a>
			<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
				<li><Link to={'/courses'} className='dropdown-item'>List</Link></li>
				<li><Link to={'/courses/new'} className='dropdown-item'>New Course</Link></li>
			</ul>
		</li>
        


    )
}

export default CourseMenu