import { Grid } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import DashboardSidebarNavigation from './dashboard-sidebar-navigation';

type Props = {
  children?: React.ReactNode;
};

const Dashboard = ({ children }: Props) => {
  const { pathname } = useLocation();

  return (
    <Grid
      container
      direction={'row'}
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <DashboardSidebarNavigation rootPath={pathname} />{' '}
      <Outlet context={{ rootPath: pathname }} />
    </Grid>
  );
};

export default Dashboard;
