import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <NavLink to="/html" activeClassName="active">HTML</NavLink>
            <NavLink to="/css" activeClassName="active">CSS</NavLink>
            <NavLink to="/javascript" activeClassName="active">JavaScript</NavLink>
            <NavLink to="/react" activeClassName="active">React</NavLink>
            <NavLink to="/sanity" activeClassName="active">Sanity and headless CMS</NavLink>
        </nav>
    );
}

export default Nav;
