import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { default as MuiLink } from '@mui/material/Link';

type Props = {
  rootPath: string;
};

const DashboardSidebarNavigation = ({ rootPath }) => {
  return (
    <div>
      <SwipeableDrawer
        anchor="left"
        open={true}
        onClose={() => {}}
        onOpen={() => {}}
      >
        <Toolbar style={{ width: '6rem', height: 'auto' }}>
          <Link to={`/`}>Logo</Link>
        </Toolbar>
        <div>
          <List>
            <MuiLink
              underline="none"
              component={Link}
              to={`${rootPath}/settings-and-privacy`}
            >
              <ListItem button>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary={'settings and privacy'} />
              </ListItem>
            </MuiLink>
            <MuiLink underline="none" href={'/'}>
              <ListItem button>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary={'logout'} />
              </ListItem>
            </MuiLink>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default DashboardSidebarNavigation;
