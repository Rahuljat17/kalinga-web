import React from "react";
// import Icon from "@mui/material/Icon";
import {
  // Link,
  Navigate,
} from "react-router-dom";
// import IconButton from "@mui/material/IconButton";
import "../../common/navbar/index.css";
// import { NavLink } from "react-router-dom";
import Logout from "../../Accets/logout.png";
import {
  Button,
  Typography,
  DialogActions,
  DialogTitle,
  Grid,
  Dialog,
  Box,
} from "@mui/material";
import "../styles/drawer.css";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default class LG extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      view: false,
    };
  }

  render() {
    const { login } = this.props;

    if (this.state.redirect === true) {
      return <Navigate to="/" />;
    }
    return (
      <Grid>
        {/* //   <IconButton
      //   onClick={() => {
      //     localStorage.removeItem("qubi7_type");
      //     localStorage.removeItem("qubi7_name");
      //     localStorage.removeItem("qubi7_profile_pic");
      //     localStorage.removeItem("qubi7_user_id");
      //     localStorage.removeItem("qubi7_company_id");
      //     // localStorage.removeItem("taxopliance_organization_id");
      //     this.setState({redirect:true})
      //     this.props.onLogout()
      //   }}>
      //   <Icon style={{ color: "white" }}>power_settings_new</Icon>
      // </IconButton>

      // <Link> */}
        <Link to="/">
          <Button
            className="logout-button1"
            style={{ textDecoration: "none", width: "110% !important" }}
            // color="error"

            // variant="outlined"
            onClick={() => {
              // localStorage.removeItem("olangeruser_id");
              // localStorage.removeItem("olangername");
              // localStorage.removeItem("olangeremail");
              // localStorage.removeItem("olangertype");
              // localStorage.removeItem("mio_mobile");
              // localStorage.removeItem("sre_name");
              // localStorage.removeItem("qubi7_profile_pic");
              // localStorage.removeItem("sre_user_id");
              // localStorage.removeItem("qubi7_company_id");
              // localStorage.removeItem("taxopliance_organization_id");
              // this.setState({ view: true });
              this.props.onLogout();
            }}

            // style={{
            //   position:"relative",
            //      height:"30px",
            //      width:"80px",
            //      border:"1px solid",
            //      borderRadius:"5px",
            //     background:"#fadde1",
            //     fontSize:"15px",
            //     left:"-100px"
            //     }}
          >
            {/* {" "} */}

            <Typography style={{ color: "white",textTransform:"capitalize", margin: "0 20px" }}>Log Out</Typography>
          </Button>
        </Link>

        <Dialog open={this.state.view}>
          <Grid style={{ height: "200px", width: "320px", letterSpacing: 1 }}>
            <DialogTitle>
              <Typography
                style={{
                  marginTop: "2%",
                  fontSize: "18px",
                  display: "flex",
                  justifyContent: "center",
                  color: "black",
                }}
              >
                Are you Sure ? Log out of
              </Typography>
            </DialogTitle>

            <center
              style={{
                marginTop: 40,
              }}
            >
              <Button
                onClick={() => {
                  this.setState({ view: false });
                  this.props.onLogout();
                }}
                style={{ color: "#4A84E3", fontSize: "20px" }}
              >
                Log out
              </Button>
              <Button
                onClick={() => {
                  this.setState({ view: false });
                }}
                style={{ color: "#706870", fontSize: "20px" }}
              >
                Cancel
              </Button>
            </center>
          </Grid>
        </Dialog>
      </Grid>
    );
  }
}
