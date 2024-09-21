import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import Loginbg from "../../Accets/loginbg.jpeg";
import {
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styled from 'styled-components';
import Snackbar from "../../common/snackbar/components/snackbar";
import LoaderCon from "../../common/loader/containers/loader_cont";
import logo from '../../../src/Accets/alpatechlogo.png';
// import "./login.css";
import Modal from '@material-ui/core/Modal'; // Assuming you are using Material-UI for the modal
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection


const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  &:focus {
    border-color: #6e8efb;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #6e8efb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #5a7adf;
  }
`;

const SigninLink = styled.div`
  text-align: center;
  margin-top: 10px;
  a {
    color: #6e8efb;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function CreateAcount(props) {
  const [countdown, setCountdown] = useState(5); // Initial countdown timer value (in seconds)

  const [name, setname] = useState('');
  const [username, setusername] = useState("");
  const [orgname, setorgname] = useState("");
  const [email, setemail] = useState('');
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [openModal, setOpenModal] = useState(false); // Modal visibility state

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleCreateAccount = () => {
    props.create_account(name, orgname, mobile, email, password);
    setname('');
    setusername('');
    setorgname('');
    setemail('');
    setmobile('');
    setpassword('');
    setCountdown(5); // Reset the countdown to 5 seconds
    // Open the success modal
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(timer);
          setOpenModal(false); // Close the modal
          navigate('/login'); // Redirect to the login page
        }
        return prevCountdown - 1;
      });
    }, 1000);
  };
  const handleCloseModal = () => {
    setOpenModal(false); // Close the modal immediately
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div>
      <Grid>
        <div className='main-container'>
        <div className="cntr">
          <FormContainer className='formContainer'>
            <Form>
              <Logo>
                <img src={logo} alt="Rapify SMS" />
              </Logo>
              <Title>Create an Account</Title>
              <Input type="text" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} />
              <Input type="text" placeholder="Org-Name" value={orgname} onChange={(e) => setorgname(e.target.value)} />
              <Input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
              <Input type="text" placeholder="Mobile" value={mobile} onChange={(e) => setmobile(e.target.value)} />
              <TextField
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                size='small'
                value={password}
                style={{ width: "100%" }}
                onChange={(e) => setpassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
              <div className='cntr2'><Button style={{ margin: "20px", padding: "10px 80px", borderRadius: "20px" }} onClick={handleCreateAccount}>Register</Button></div>
              <SigninLink>
                Already have an account? <a href="/">Sign in</a>
              </SigninLink>
            </Form>
          </FormContainer>
          </div>
          <div className="loginbg">
            <img src={Loginbg} />
          </div>
        </div>
      </Grid>
      <Modal open={openModal} onClose={handleCloseModal}>
        <div style={{ padding: 20, backgroundColor: 'white', margin: '100px auto', maxWidth: 300 }}>
          <h2>Registration Successful</h2>
          <p>Your account has been created successfully!</p>
          <p>Redirecting to login page in {countdown} seconds...</p>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      </Modal>
      <LoaderCon />
      <Snackbar
        open={props.snackbar.response_received}
        close_snack_bar={props.close_snack_bar}
        message={props.snackbar.message}
      />
    </div>
  );
}

export default CreateAcount;
