import { useContext } from 'react';
import AuthContext from '../Auth/authContext';

const LandingPage = () => {
    const authContext = useContext(AuthContext);

    const { user, loading } = authContext;
    return (
        <div>
            <p>Landing Page</p>
            <p>{user?.name || 'no data'}</p>
            <p>{user?.nrp || 'no data'}</p>
            <p>{loading ? 'load' : 'aman'}</p>
        </div>
    );
};

export default LandingPage;
