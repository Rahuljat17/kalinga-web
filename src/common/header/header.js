import * as React from 'react';
import './header.css'

// react-roter-dom imports

import { Link, useLocation } from 'react-router-dom';

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
import { NavLink } from 'react-router-dom';

// mui icons

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// image imports

import KalingaPremeumLogo from "../../Accets/KalingaPremeumLogo.png";

const pages = ['Home', 'About Us', 'Our Network', 'Our Certifications'];
const productOptions = ['Wires', 'Cables', 'PVC Pipes', 'Lighting', 'Others'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElProducts, setAnchorElProducts] = React.useState(null);
  const location = useLocation();

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
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <img src={KalingaPremeumLogo} className='logo' />

          <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between' }}>
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
                <MenuItem key={page} onClick={handleCloseNavMenu} className='menuitem'
                style={{
                  textDecoration: 'none',
                  backgroundColor: location.pathname === (page === 'Home' ? '/' : `/${page.replace(/\s+/g, '-').toLowerCase()}`) ? '#C50568' : 'white',
                }}>
                  <Typography sx={{ textAlign: 'center', textTransform: "none" }}>
                    <Link
                      to={page === 'Home' ? '/' : `/${page.replace(/\s+/g, '-').toLowerCase()}`}
                      style={{
                        color: location.pathname === (page === 'Home' ? '/' : `/${page.replace(/\s+/g, '-').toLowerCase()}`) ? '#fff' : 'black',
                      }}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleOpenProductsMenu}>
                <Typography sx={{ textAlign: 'center', display: 'flex', alignItems: "center" }}>Our Products <KeyboardArrowDownIcon /></Typography>
              </MenuItem>
              <Menu
                anchorEl={anchorElProducts}
                open={Boolean(anchorElProducts)}
                onClose={handleCloseProductsMenu}
              >
                {productOptions.map((option) => (
                  <MenuItem key={option} onClick={handleCloseProductsMenu}>
                    <Typography sx={{ textAlign: 'center' }}>
                      <Link to={`/${option.replace(/\s+/g, '-').toLowerCase()}`}>
                        {option}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
              <MenuItem onClick={handleCloseNavMenu} className='menuitem'
              style={{
                backgroundColor: location.pathname === ('/contact-us') ? '#C50568' : 'white',
              }}>
                <Typography sx={{ textAlign: 'center', textTransform: "none" }}>
                  <Link
                    to={'/contact-us'}
                    style={{
                      color: location.pathname === ('/contact-us') ? '#fff' : 'black',
                    }}
                  >
                    Contact Us
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                disableRipple
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', '&:hover': { backgroundColor: 'transparent', color: 'black' }, }}
              >
                <NavLink
                  to={page === 'Home' ? '/' : `/${page.replace(/\s+/g, '-').toLowerCase()}`}
                  style={({ isActive }) => ({
                    textDecoration: 'none',
                    color: isActive ? '#C50568' : 'black',
                    borderBottom: isActive ? '2px solid black' : 'none',
                  })}
                >
                  {page}
                </NavLink>
              </Button>
            ))}
            <Button
              onClick={handleOpenProductsMenu}
              sx={{ my: 2, color: 'black', display: 'flex', alignItems: "center" }}
            >
              Our Products <KeyboardArrowDownIcon />
            </Button>
            <Menu
              anchorEl={anchorElProducts}
              open={Boolean(anchorElProducts)}
              onClose={handleCloseProductsMenu}
            >
              {productOptions.map((option) => (
                <MenuItem key={option} onClick={handleCloseProductsMenu}
                style={{
                  backgroundColor: location.pathname === `/${option.replace(/\s+/g, '-').toLowerCase()}` ? '#C50568' : 'white',
                }}>
                  <Typography sx={{ textAlign: 'center' }}>
                    <Link to={`/${option.replace(/\s+/g, '-').toLowerCase()}`}
                    style={{
                      textDecoration: 'none',
                      color: location.pathname === `/${option.replace(/\s+/g, '-').toLowerCase()}` ? 'white' : 'black',
                    }}>
                      {option}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Link to='./contact-us'>
              <Button variant="contained" size="large" className='contact_btn' style={{ backgroundColor: "#1E2D4D", padding: "11px 30px", borderRadius: "10px", textTransform: "none" }}>
                Contact Us
              </Button>
            </Link>
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
