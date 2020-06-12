// Packages
import React from 'react';

// Components
import SearchBar from './SearchBar';
import UserNavigation from './UserNavigation';

class Nav extends React.Component {
    render() {
        return(
            <nav>
                <SearchBar/>
                <UserNavigation/>
            </nav>
        );
    }
};

export default Nav;