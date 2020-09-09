import React from 'react'
import { NavLink } from 'react-router-dom';
import './nav.scss';
//isActive fortæller hvornår dette link skal betragtes som aktivt,
//mens activeClassName kun er aktiv når vi står på den pågældende side i browseren.
//vi kan derfor style vores aktive link via den css class vi skriver heri.
export const nav = () => {
    return (
        <nav>
            <ul>
                <li><NavLink exact to="/"
                    isActive={(_, { pathname }) => ["/", "/Home", "/home"].includes(pathname)}
                    activeClassName="navbar__link--active"
                    className="navbar__link">Home</NavLink></li>
                <li><NavLink to="/events" activeClassName="navbar__link--active"
                    className="navbar__link">Events</NavLink></li>
                <li><NavLink to="/shop" activeClassName="navbar__link--active"
                    className="navbar__link">Shop</NavLink></li>
                <li><NavLink to="/contactus" activeClassName="navbar__link--active"
                    className="navbar__link">Contact us</NavLink></li>
            </ul>
        </nav>
    )
}
export default nav;