// Packages
import React from 'react';

// Components
import SearchBar from './SearchBar';
import UserNavigation from './UserNavigation';

class Nav extends React.Component {
    render() {
        return(
            <nav>
                <div></div>
                <SearchBar/>
                <UserNavigation/>
            </nav>
        );
    }
};

export default Nav;