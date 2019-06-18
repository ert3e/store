import React from 'react';
import UserLayout from '../../hoc/user';
import MyBotton from '../untils/button';

const UserDashboard = () => {
    return (
        <UserLayout>
            <div>
                <div className="user_nfo_panel">
                    <h1>User information</h1>
                    <div>
                        <span>name</span>
                        <span>lastname</span>
                        <span>email</span>
                    </div>
                    <MyBotton
                        type="default"
                    />
                </div>
            </div>
        </UserLayout>
    );
}

export default UserDashboard;
