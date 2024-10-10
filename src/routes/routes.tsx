import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/dashboard/dashboard/Dashboard';
import MakeAdmin from '../pages/dashboard/MakeAdmin';
import Login from '../pages/authentication/Login';
import Register from '../pages/authentication/Register';
import ErrorPage from '../pages/error/ErrorPage';
import Brands from '../pages/dashboard/Brands';
import Influencer from '../pages/dashboard/Influencer';
import Categories from '../pages/dashboard/Categories';
import Review from '../pages/dashboard/Review';
import Campaign from '../pages/dashboard/Campaign';
import TermsCondition from '../pages/dashboard/TermsCondition';
import FAQs from '../pages/dashboard/FAQs';
import Notification from '../pages/dashboard/Notification';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <Dashboard /> }, // Dashboard
            { path: 'brands', element: <Brands /> }, // Brands
            { path: 'influencer', element: <Influencer /> }, // Influencer
            { path: 'categories', element: <Categories /> }, // Categories
            { path: 'reviews', element: <Review /> }, // Reviews
            { path: 'campaign', element: <Campaign /> }, // Campaign
            { path: 'make-admin', element: <MakeAdmin /> }, // Add Admin
            { path: 'terms', element: <TermsCondition /> }, // Terms & Conditions
            { path: 'faqs', element: <FAQs /> }, // FAQs
            { path: 'notification', element: <Notification /> }, // Notifications
        ],
    },
    { path: '/login', element: <Login /> }, // Login
    { path: '/register', element: <Register /> }, // Register
]);

export default router;
