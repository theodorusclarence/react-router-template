//eslint-disable-next-line
export default (state, { type, payload }) => {
    switch (type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
            };
        case 'USER_LOADED':
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                user: null,
            };
        default:
            return state;
    }
};
