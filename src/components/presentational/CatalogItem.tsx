import React, { FunctionComponent } from 'react';

import Movie from "../../interfaces/movie";

const CatalogItem: FunctionComponent<CatalogItemProps> = ({itemData}) => {
    return (
        <div className="catalog-item">
            <h2>{itemData.name}</h2>
            <p>Duration: {itemData.duration} minutes</p>
        </div>
    );
}

type CatalogItemProps = {
    itemData: Movie
}

export default CatalogItem;