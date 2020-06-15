// Packages
import React from 'react';

// Components
import FilterNavigation from './FilterNavigation';
import CatalogItem from '../presentational/CatalogItem';

// Types and interfaces
import Movie from '../../interfaces/movie';

class Catalog extends React.Component {
    render() {

        const itemData: Movie = {
            id: 1, 
            name: "Pirates of the Caribbean",
            duration: 129, 
            categories: [
                {
                    id: 1, 
                    name: "Action"
                }
            ]
        };

        return(
            <div className="catalog">
                <FilterNavigation/>
                <main>
                    <CatalogItem itemData={itemData}/>
                </main>                
            </div>
        );
    }
};

export default Catalog;