import Dashboard from 'app/layouts/dashboard-layout';
import SettingsAndPrivacy from 'app/views/dashboard/settings-and-privacy';
import NotFoundPage from 'app/views/pages/NotFoundPage';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const DashboardDefaultContent = lazy(
  () => import('app/views/dashboard/dashboard-default-content'),
);

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        <Route index element={<DashboardDefaultContent />} />
        <Route path="settings-and-privacy" element={<SettingsAndPrivacy />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default DashboardRoutes;
