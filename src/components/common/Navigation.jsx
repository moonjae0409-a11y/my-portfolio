import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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
        bgcolor: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-taupe-light)',
        color: 'var(--color-text-primary)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            fontWeight: 700,
            color: 'var(--color-taupe-dark)',
            textDecoration: 'none',
          }}
        >
          <Box
            component="span"
            sx={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              bgcolor: 'var(--color-secondary)',
              display: 'inline-block',
            }}
          />
          My Portfolio
        </Typography>
        <Tabs
          value={currentTab}
          sx={{
            minHeight: 0,
            '& .MuiTabs-indicator': {
              backgroundColor: 'var(--color-primary)',
              height: 2,
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
              disableRipple={false}
              sx={{
                fontWeight: 500,
                letterSpacing: '0.02em',
                color: 'var(--color-taupe-light)',
                minHeight: 0,
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: 'var(--color-taupe-dark)',
                },
                '&.Mui-selected': {
                  color: 'var(--color-text-primary)',
                },
              }}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
