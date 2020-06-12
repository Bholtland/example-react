// Packages
import React from 'react';

// Components
import FilterNavigation from './FilterNavigation';

class Catalog extends React.Component {
    render() {
        return(
            <div className="catalog">
                <FilterNavigation/>
                <main></main>                
            </div>
        );
    }
};

export default Catalog;