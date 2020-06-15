// Packages
import React from 'react';

// Components


class SearchBar extends React.Component {
    render() {
        return(
            <div className="searchbar">
                <form action="">
                    <fieldset>
                        <input type="text" placeholder="Start typing to find you video..."/>
                    </fieldset>
                </form>
            </div>
        );
    }
};

export default SearchBar;