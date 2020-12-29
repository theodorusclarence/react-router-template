import { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthState from './Auth/AuthState';
import AppLayout from './Pages/AppLayout';
import LandingPage from './Pages/LandingPage';
import Navbar from './Pages/Navbar';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
    return (
        <AuthState>
            <div className='App'>
                <h1>Protected React Router</h1>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route exact path='/red' render={() => <Redirect to='/app' />} />
                    <ProtectedRoute exact path='/app' component={AppLayout} />
                </Switch>
            </div>
        </AuthState>
    );
};

export default App;
