import { LinearProgress } from '@mui/material';
import Home from 'app/views/pages/Home';
import NotFoundPage from 'app/views/pages/NotFoundPage';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const About = lazy(() => import('app/views/pages/About'));
const DashboardRoutes = lazy(() => import('./dashboardRoutes'));
const RootRoutes = () => {
  return (
    <Suspense fallback={<LinearProgress style={{ margin: '10rem' }} />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard/*" element={<DashboardRoutes />} />
        <Route path="not-found" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
export default RootRoutes;
