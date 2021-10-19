import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';
import "./PrivateRoute.css"

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner className="item-center" animation="border" variant="danger" />

    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect to={{ pathname: "/login", state: { from: location } }}>
            </Redirect>}>
        </Route>

    );
};

export default PrivateRoute;