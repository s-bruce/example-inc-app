import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { Dashboard } from './routes/Dashboard';
import { NotFound } from './routes/NotFound';
import { Users } from './routes/Users';
import { Path } from './config';
import { Layout } from '../components/Layout';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        index
                        element={<Navigate to={Path.Dashboard} replace />}
                    />
                    <Route path={Path.Dashboard} element={<Dashboard />} />
                    <Route path={Path.Users} element={<Users />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
