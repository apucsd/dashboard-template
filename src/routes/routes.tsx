import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/dashboard/dashboard/Dashboard';
import MakeAdmin from '../pages/admin/MakeAdmin';
import Login from '../pages/authentication/Login';
import Register from '../pages/authentication/Register';
import ErrorPage from '../pages/error/ErrorPage';
import TermsCondition from '../pages/terms-and-conditions/TermsCondition';
import FAQs from '../pages/faqs/FAQs';
import Notification from '../pages/notifications/Notification';

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
