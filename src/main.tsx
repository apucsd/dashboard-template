import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes.tsx';
import Provider from './provider/Provider.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>,
);
