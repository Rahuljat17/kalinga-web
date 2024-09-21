import * as React from 'react';
import './header.css'

// react-roter-dom imports

import { Link } from 'react-router-dom'; // or <a> if not using react-router-dom

// mui imports

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

// image imports

import KalingaPremeumLogo from "../../Accets/KalingaPremeumLogo.png";

const pages = ['Home', 'About Us', 'Our Network', 'Our Certification'];
const productOptions = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElProducts, setAnchorElProducts] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenProductsMenu = (event) => {
    setAnchorElProducts(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseProductsMenu = () => {
    setAnchorElProducts(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
          <img src={KalingaPremeumLogo} className='logo' />

          <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}  style={{ margin: "40px"}}>
                  <Typography sx={{ textAlign: 'center', textTransform: "none" }}>
                    <Link to={`/${page.replace(/\s+/g, '-').toLowerCase()}`} style={{ textDecoration: 'none', color: 'black' }}>
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleOpenProductsMenu}>
                <Typography sx={{ textAlign: 'center' }}>Our Products</Typography>
              </MenuItem>
              <Menu
                anchorEl={anchorElProducts}
                open={Boolean(anchorElProducts)}
                onClose={handleCloseProductsMenu}
              >
                {productOptions.map((option) => (
                  <MenuItem key={option} onClick={handleCloseProductsMenu}>
                    <Typography sx={{ textAlign: 'center' }}>
                      <Link to={`/products/${option.replace(/\s+/g, '-').toLowerCase()}`} style={{ textDecoration: 'none', color: 'black' }}>
                        {option}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                <Link to={`/${page.replace(/\s+/g, '-').toLowerCase()}`} style={{ textDecoration: 'none', color: 'black' }}>
                  {page}
                </Link>
              </Button>
            ))}
            <Button
              onClick={handleOpenProductsMenu}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              Our Products
            </Button>
            <Menu
              anchorEl={anchorElProducts}
              open={Boolean(anchorElProducts)}
              onClose={handleCloseProductsMenu}
            >
              {productOptions.map((option) => (
                <MenuItem key={option} onClick={handleCloseProductsMenu}>
                  <Typography sx={{ textAlign: 'center' }}>
                    <Link to={`/products/${option.replace(/\s+/g, '-').toLowerCase()}`} style={{ textDecoration: 'none', color: 'black' }}>
                      {option}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button variant="contained" size="large" style={{backgroundColor: "#1E2D4D", padding: "11px 30px", borderRadius: "10px", textTransform: "none"}}>
              Contact Us
            </Button>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {pages.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>
                    <Link to={`/${setting.replace(/\s+/g, '-').toLowerCase()}`} style={{ textDecoration: 'none', color: 'black' }}>
                      {setting}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
