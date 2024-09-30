import React from 'react';
import './contact-us.css'
import MainVideo from "../../Accets/WhatsApp Video 2024-09-23 at 11.55.16 AM.mp4";
import HeadingIcon from "../../Accets/Group 1.png";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from 'rsuite';


const ContactUs = () => {
  return (
    <div className='container'>
      <div className='contactUs'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.693561135538!2d77.08100237551312!3d28.96681227548382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390daf48cb6941d3%3A0x287d340226c7fe65!2sKalinga%20Cables%20and%20Conduit%20Company!5e0!3m2!1sen!2sin!4v1727087978144!5m2!1sen!2sin" height="420" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className='contents'>
          <h2><img src={HeadingIcon} /><span>Connect with</span><span>us</span></h2>
          <Grid className='contact-form' >
            {/* First Grid */}
            <Grid className='input-fields'>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                fullWidth
                className='text-fields'
              />
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                fullWidth
                className='text-fields'
              />
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                fullWidth
                className='text-fields'
              />
            </Grid>

            {/* Second Grid */}
            <Grid className='querybox'>
              {/* Text area with label "Query" */}
              <TextField
                id="outlined-multiline-static"
                label="Query"
                multiline
                rows={8}
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Button variant="contained" size="large">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};



export default ContactUs;
