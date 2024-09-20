import * as React from "react";
import "../../../pages/ContactUs/Styles/style.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import "../../../router/styles/drawer.css";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { Button, IconButton, Paper } from "@mui/material";
import Snackbar from "../../../common/snackbar/components/snackbar";
import LoaderCon from "../../../common/loader/containers/loader_cont";
import Contactpic from "../../../Accets/contactus.png";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "transparent" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor:
      theme.palette.mode === "light"
        ? "#9747FF"
        : "linear-gradient(89.97deg, #9747FF 1.43%, rgba(56, 182, 255, 0.33) 134.69%)",
  },
}));
const drawerWidth = 280;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: "60px 150px 0px 10px" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function PermanentDrawerLeft(props) {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateFields = () => {
    let valid = true;
    let tempErrors = { name: "", email: "", message: "" };

    if (name.trim() === "") {
      tempErrors.name = "Name is required";
      valid = false;
    }
    if (!validateEmail(email)) {
      tempErrors.email = "Invalid email address";
      valid = false;
    }
    if (message.trim() === "") {
      tempErrors.message = "Message is required";
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem('Awcfhjs');
  
    if (validateFields()) {
      if (token) {
        props.ContactUsMessage(token, name, email, message);
        console.log("Form is valid. Submitting...");
      } else {
        console.log("Token not found");
      }
    } else {
      console.log("Form is invalid");
    }
  };

  return (
    <div>
      <Box
        className="contact-container"
        sx={{
          display: "flex",
          margin: "60px 0px 0 0",
          backgroundColor: "#45a0d4 !important",
          height: "calc(100vh - 60px)",
          padding: "0px 50px 0 100px",
        }}
      >
        <div className="text-fields">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <input
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <textarea
              placeholder="Type Your Message Here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}

            <div className="cntr">
              <button onClick={handleSubmit}>Send</button>
            </div>
          </div>
        </div>
        <div className="contact-pic">
          <img src={Contactpic} alt="Contact" />
        </div>
      </Box>
      <div>
        <div className="strip1"></div>
        <div className="strip2"></div>
        <div className="strip3"></div>
      </div>
      <LoaderCon />
        <Snackbar
          open={props.snackbar.response_received}
          close_snack_bar={props.close_snack_bar}
          message={props.snackbar.message}
        />
    </div>
    
  );
}
