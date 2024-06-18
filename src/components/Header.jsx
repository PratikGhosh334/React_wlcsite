import React from 'react';
import { AppBar, Toolbar, Typography, Link, Container } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" color="primary" sx={{ width: '100%', left: 0, right: 0 }}>
      <Container maxWidth="xl" sx={{ padding: 0 }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" color="inherit" underline="none">
              My Website
            </Link>
          </Typography>
          <div>
            <Link href="#" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>
              Home
            </Link>
            <Link href="#" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>
              Products
            </Link>
            <Link href="#" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>
              Company
            </Link>
            <Link href="#" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>
              Blog
            </Link>
          </div>
        </Toolbar>
      </Container> 
    </AppBar>
  );
}

export default Header;
