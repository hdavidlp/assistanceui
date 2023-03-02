import React from "react";  
import { Link } from 'react-router-dom';

const AllInOneMenu = () => {
    return (
        


        <li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				All In One
			</a>
			<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
				<li><Link to={'/allinone'} className='dropdown-item'>All in One</Link></li>
			</ul>
		</li>
        


    )
}

export default AllInOneMenu