import { createContext } from 'react';

export const AuthContext = createContext(null);

const initialState = {
    isAuthenticated: false,
    loading: false,
};

export const AuthProvider = () => {};
