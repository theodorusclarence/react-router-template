import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';

const AuthState = (props) => {
    const initialState = {
        isAuthenticated: null,
        loading: true,
        user: null,
        token: null,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    const loadUser = () => {
        const user = { name: 'Clarence', nrp: '0511194000104' };
        dispatch({
            type: 'USER_LOADED',
            payload: user,
        });
    };

    const login = () => {
        setTimeout(() => {
            dispatch({
                type: 'LOGIN_SUCCESS',
            });
            loadUser();
        }, 2000);
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                token: state.token,
                login,
                loadUser,
                logout,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
