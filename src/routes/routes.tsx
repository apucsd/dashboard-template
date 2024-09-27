import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/dashboard/dashboard/Dashboard';
import UserManagement from '../pages/dashboard/UserManagement';
import MakeAdmin from '../pages/dashboard/MakeAdmin';
import Login from '../pages/authentication/Login';
import Register from '../pages/authentication/Register';
import ErrorPage from '../pages/error/ErrorPage';
import Notification from '../pages/dashboard/Notification';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,

        children: [
            {
                path: '',
                element: <Dashboard />,
            },
            {
                path: 'users',
                element: <UserManagement />,
            },
            {
                path: 'make-admin',
                element: <MakeAdmin />,
            },
            {
                path: 'profile',
                element: <MakeAdmin />,
            },
            {
                path: 'notification',
                element: <Notification />,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
]);

export default router;
