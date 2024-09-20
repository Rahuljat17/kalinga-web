import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { green, pink } from "@mui/material/colors";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";
import Icon from "@mui/material/Icon";
import LG_Cont from "../../router/containers/Lg_Cont";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Logo from "./image copy.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { useLocation } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { all_admin_option, all_whatsapp_option } from "../constant";
import { red } from "@mui/material/colors";
import { Avatar, Badge, Grid } from "@mui/material";
const drawerWidth = 110;

// drawer for whtsapp start
const drawerWidths = 240;

const openedMixins = (theme) => ({
  width: drawerWidths,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixins = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeaders = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBars = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "openss",
})(({ theme, openss }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(openss && {
    marginLeft: drawerWidths,
    width: `calc(100% - ${drawerWidths}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawers = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "openss",
})(({ theme, openss }) => ({
  width: drawerWidths,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "revert",
  ...(openss && {
    ...openedMixins(theme),
    "& .MuiDrawer-paper": openedMixins(theme),
  }),
  ...(!openss && {
    ...closedMixins(theme),
    "& .MuiDrawer-paper": closedMixins(theme),
  }),
}));

// drawer for whtsapp end

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  height: 50,
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  // backgroundColor:'red',
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const useStyles = (theme) => ({
  root: {
    display: "flex",
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // backgroundColor: "#FF7000"
    background: "#fadde1",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),

    backgroundColor: "#11101d",
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#11101d",

    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    // backgroundColor: '#FF7000',
    backgroundColor: "#11101d",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  iconStyle: {
    position: "relative",
    left: 8,
    top: 3,
    fontSize: 12,
    marginRight: 5,
    //   color:'red'
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  grow: {
    flexGrow: 1,
  },
  Icon: {
    //   color:"red",
    position: "relative",
    left: "10px",
  },

  ListItem: {
    border: "1px solid red",

    "&:hover": {
      borderRadius: "3px",
      backgroundColor: "#08019f",
      // color:'red'
    },
  },
});

export default function MiniDrawer(props) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const opens = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = React.useState(false);
  const [openss, setOpenss] = React.useState(false);
  const location = useLocation();
  const handleDrawerOpen = () => {
    setOpenss(true);
  };

  const handleDrawerClose = () => {
    setOpenss(false);
  };
  function sideBar(role, open) {
    if (role === "Admin") {
      return "";
      all_admin_option.map((option, index) =>
        location.pathname === option.link ? (
          <center
            style={{
              background:
                "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 95.87%)",
              verticalAlign: "middle",
            }}
          >

            <ListItem
              style={{ display: "flex", justifyContent: "center" }}
              button
              key={option.name}
              className="drawer_text"
            >
              <ListItemIcon>
                <Icon className="drawer_icon">{option.icon}</Icon>
              </ListItemIcon>
              <Typography style={{ fontSize: "12px", marginTop: "-10px" }}>
                {option.name}
              </Typography>
            </ListItem>
          </center>
        ) : (
          <Link
            key={option.link}
            to={option.link}
            style={{ textDecoration: "none" }}
          >
            <center>
              {location.pathname === "/whatsapp" ? (
                <div>
                  {" "}
                  <ListItem
                    style={{ display: "flex", justifyContent: "center" }}
                    button
                    key={option.name}
                    className="drawer_text"
                  >
                    <ListItemIcon>
                      <Icon className="drawer_icon">{option.icon}</Icon>
                    </ListItemIcon>
                    <Typography
                      style={{ fontSize: "12px", marginTop: "-10px" }}
                    >
                      {option.name}
                    </Typography>
                  </ListItem>
                </div>
              ) : (
                <div onClick={handleDrawerClose}>

                  <ListItem
                    style={{ display: "flex", justifyContent: "center" }}
                    button
                    key={option.name}
                    className="drawer_text"
                  >
                    <ListItemIcon>
                      <Icon className="drawer_icon">{option.icon}</Icon>
                    </ListItemIcon>
                    <Typography
                      style={{ fontSize: "12px", marginTop: "-10px" }}
                    >
                      {option.name}
                    </Typography>
                  </ListItem>
                </div>
              )}
            </center>
          </Link>
        )
      );
    }
    if (role === "User") {
      return all_whatsapp_option.map((option, index) =>
        location.pathname === option.link ? (
          <center
            style={{
              background: "linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 95.87%)",
              verticalAlign: "middle",
            }}
          >

            <ListItem
              style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "12px 0px" }}
              button
              key={option.name}
              className="drawer_text"
            >
              <ListItemIcon>
                <Icon className="drawer_icon">{option.icon}</Icon>
              </ListItemIcon>
              <Typography style={{ fontSize: "12px", marginTop: "-4px" }}>
                {option.name}
              </Typography>
            </ListItem>
          </center>
        ) : (
          <Link
            key={option.link}
            to={option.link}
            style={{ textDecoration: "none" }}
          >
            <center>
              {location.pathname === "/whatsapp" ? (
                <div>
                  {" "}
                  <ListItemIcon>
                    <Icon className="drawer_icon">{option.icon}</Icon>
                  </ListItemIcon>
                  <ListItem
                    style={{ display: "flex", justifyContent: "center" }}
                    button
                    key={option.name}
                    className="drawer_text"
                  >
                    <Typography
                      style={{ fontSize: "12px", marginTop: "-10px" }}
                    >
                      {option.name}
                    </Typography>
                  </ListItem>
                </div>
              ) : (
                <div onClick={handleDrawerClose}>


                  <ListItem
                    style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "12px 0px" }}
                    button
                    key={option.name}
                    className="drawer_text"
                  ><ListItemIcon>
                      <Icon className="drawer_icon">{option.icon}</Icon>
                    </ListItemIcon>
                    <Typography
                      style={{ fontSize: "12px", marginTop: "-4px" }}
                    >
                      {option.name}
                    </Typography>
                  </ListItem>
                </div>
              )}
            </center>
          </Link>
        )
      );
    }
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar style={{ backgroundColor: "white", position: "fixed" }}>
        <Toolbar style={{ justifyContent: "flex-end", color: "black" }}>
          {props.login.role === "User" && (
            <Typography
              variant="h6"
              noWrap
              component="div"
              style={{ color: "black", marginLeft: "100px" }}

            >
              {/* USER PANEL */}
            </Typography>
          )}
         
          <Box sx={{ flexGrow: 0, display: "flex", flexDirection: "row", marginLeft: "20px" }}>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                style={{}}
                size="small"
                sx={{ ml: 0 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 45, height: 45,border:"1px solid black" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png"></Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
        <Drawer variant="permanent" open={true}>
          <Grid
            style={{
              background: "linear-gradient(180deg, #38B6FF , #545454 )",
              height: "100%",
              flexDirection: "column",
              display: "flex",
              // alignItems: "center",
            }}
          >
            <center>
              {/* <Avatar
                alt={localStorage.getItem("name")}
                src={Logo}
                style={{ width: 70, height: 70, margin: "15px", backgroundColor: "white", padding: "10px", }}
              >
                {localStorage.getItem("profile_pic") == null
                  ? ""
                  : localStorage.getItem("name").substring(0, 1).toUpperCase()}
              </Avatar> */}
              <div className="avtar" style={{ backgroundColor: "white", borderRadius: "50%", width: "80%", aspectRatio: "1", margin: "10px auto 30px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={Logo} style={{ width: "70px" }} />
                {/* <h2 style={{fontSize: "12px", margin: "0"}}>ALPA TECH</h2>
                  <p style={{fontSize: "10px", margin: "0"}}>GATEWAY</p> */}
              </div>
            </center>
            <List>{sideBar(props.login.role, open)}</List>
          </Grid>
        </Drawer>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={opens}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            display: "flex",
            flexDirection: "column",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,

            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 20,
              height: 20,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          My Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SupportAgentIcon />
          </ListItemIcon>
          <a
            target="_blank"
            href="https://wa.me/9108433133"
            style={{ textDecoration: "none", color: "#000" }}
          >
            Support
          </a>
        </MenuItem>
        <Divider />
        {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ChangeCircleIcon fontSize="small" />
          </ListItemIcon>
          Switch to Products
        </MenuItem> */}

        <MenuItem onClick={handleClose}>
          <LG_Cont />
        </MenuItem>
      </Menu>
    </Box>
  );
}
