import React from "react";
import { Link } from "react-router-dom";

const HomeMenu = () =>{
    return (
        <li class="nav-item">
            <Link to={'/'} className='nav-link active' >Home</Link>
        </li>

    )
}

export default HomeMenu