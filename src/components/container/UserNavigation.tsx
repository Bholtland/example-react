// Packages
import React from 'react';

// Components


class UserNavigation extends React.Component {
    render() {
        return(
            <div className="user-navigation">
                <p>Username</p>
                <img src="/images/user.png" alt="User icon"/>
            </div>
        );
    }
};

export default UserNavigation;