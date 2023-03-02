import React from "react";
import { Link } from "react-router-dom";

const GroupMenu = () => {
    return (
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Groups
				</a>
				<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
						<li><Link to={'/groups'} className='dropdown-item'>List</Link></li>
						<li><Link to={'/groups/new'} className='dropdown-item'>New Group</Link></li>
				</ul>	
			</li>
    )
}

export default GroupMenu