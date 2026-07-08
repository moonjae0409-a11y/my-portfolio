import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Projects', path: '/projects' },
];

function Navigation() {
  const { pathname } = useLocation();
  const currentTab = NAV_ITEMS.some((item) => item.path === pathname)
    ? pathname
    : false;

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'var(--color-primary)',
        color: 'var(--color-accent)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            fontWeight: 700,
            color: 'var(--color-accent)',
            textDecoration: 'none',
          }}
        >
          My Portfolio
        </Typography>
        <Tabs
          value={currentTab}
          textColor="inherit"
          sx={{
            minHeight: 0,
            '& .MuiTabs-indicator': {
              backgroundColor: 'var(--color-accent)',
            },
          }}
        >
          {NAV_ITEMS.map((item) => (
            <Tab
              key={item.path}
              label={item.label}
              value={item.path}
              component={Link}
              to={item.path}
              sx={{
                fontWeight: 600,
                color: 'var(--color-accent)',
                minHeight: 0,
              }}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
