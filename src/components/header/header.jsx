import React from 'react'
import './header.scss'
import SearchBar from './search/searchBar'
import Nav from './nav/nav'

export const header = () => {
    return (
        <header>
            <h1><span className="header__h1-red">RUN</span>INC</h1>
            <Nav />
            <SearchBar />
        </header>
    )
}
 export default header;
