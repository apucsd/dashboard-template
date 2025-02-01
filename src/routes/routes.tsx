import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/dashboard/dashboard/Dashboard';
import MakeAdmin from '../pages/dashboard/MakeAdmin';
import Login from '../pages/authentication/Login';
import Register from '../pages/authentication/Register';
import ErrorPage from '../pages/error/ErrorPage';
import TermsCondition from '../pages/dashboard/TermsCondition';
import FAQs from '../pages/dashboard/FAQs';
import Notification from '../pages/dashboard/Notification';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <Dashboard /> },

            { path: 'make-admin', element: <MakeAdmin /> },
            { path: 'terms', element: <TermsCondition /> },
            { path: 'faqs', element: <FAQs /> }, // FAQs
            { path: 'notification', element: <Notification /> },
        ],
    },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
]);

export default router;
