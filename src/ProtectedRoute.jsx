import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthContext from './Auth/authContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated } = authContext;
    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuthenticated) {
                    return <Component />;
                } else {
                    // <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
                    return <Redirect to='/' />;
                }
            }}
        />
    );
};

export default ProtectedRoute;
