import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button>
            <Link color="#fff" component={RouterLink} to="/">
              Home
            </Link>
          </Button>
          <Button>
            <Link color="#fff" component={RouterLink} to="/about">
              About
            </Link>
          </Button>
          <Button>
            <Link color="#fff" component={RouterLink} to="/dashboard">
              Dashboard
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
