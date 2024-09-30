import React from "react";
import './Footer.css';
import { Box, Typography, Grid, Button } from '@mui/material';
import { WhatsApp, Phone, Email, LocationOn, Instagram, LinkedIn, YouTube, Facebook, Twitter } from '@mui/icons-material';
import kalinglogo from '../../Accets/KalingaPremeumLogo.png';
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import locationlogot from '../../Accets/Location.png';
import { GrLocation } from "react-icons/gr";
import inslogo from '../../Accets/instagram.png';
import fblogo from '../../Accets/Facebook.png';
import linkdinlogo from '../../Accets/Linkdin.png';
import twitterlogo from '../../Accets/twitter.png';


const Footer = () => {
    return (
        <>
            <div>
                <div className="footer-main-body">
                    <div className="foot-main-body-header">
                        <div>
                            <img src={kalinglogo} className="footer-main-logo" />
                            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start", gap: "10px" }}>
                                <div><img src={locationlogot} className="footer-logo-location" /></div>
                                <h3 style={{ fontSize: "15px", }} className="footer-title">Kalinga Cables and Conduit Co. Sector 29<br />Village Jatjoshi, Delhi-Sonipat road, chowk,<br />near Bahalgarh, Sonipat, Haryana 131001</h3>
                            </div>
                        </div>
                        {/*  */}
                        <div>
                            <h3 className="footer-connect-maintitle">Connect with us</h3>
                            <h3 className="footer-connect-withus"> <span><FiPhone fontSize={20} className="foot-connect-logo" /></span> +91 11-43090506</h3>
                            <h3 className="footer-connect-withus"> <span><FiPhone fontSize={20} className="foot-connect-logo" /></span> +91 11-45564460</h3>
                            <h3 className="footer-connect-withus"><span><IoMailOutline fontSize={20} className="foot-connect-logo" /></span> kalingacables2004@gmail.com</h3>
                        </div>
                        {/*  */}
                        <div className="foot-netwoek-main">
                            <h3 className="foot-our-network">Our Network</h3>
                            <h3 className="foot-network-menu">Kalinga Cables and Conduit</h3>
                            <h3 className="foot-network-menu">Kalinga Cables</h3>
                            <h3 className="foot-network-menu">Kalinga Hotels and Resorts</h3>
                            <h3 className="foot-network-menu">Sahni Strips</h3>
                        </div>
                        {/*  */}
                        <div className="foot-getintouch-main">
                            <h3 className="foot-getintouch-title">Get in touch</h3>
                            <a href="https://wa.me/918285642264" target="_blank">
                            <Button
                                variant="contained"
                                startIcon={<WhatsApp />}
                                className="foot-contactus-button"
                                sx={{
                                    bgcolor: '#1CA633',
                                    '&:hover': { bgcolor: '#1CA633' },
                                    mb: 2,
                                    px: 3.5,
                                    justifyContent: 'center',
                                    display: 'flex',
                                    borderRadius: "10px",
                                    height: "45px",
                                }}
                            >
                                Contact us
                            </Button>
                            </a>
                            <h3 className="foot-contactus-today">Contact with us today</h3>
                            <div className="foot-logo-all">
                                {/* <img src={inslogo} className="foot-logos" /> */}
                                {/* <img src={twitterlogo} className="foot-logos" /> */}
                                <a href="https://www.facebook.com/share/fbiqMUWD7fWusdsp/?mibextid=LQQJ4d"><img src={fblogo} className="foot-logos" /></a>
                                <a href="mailto:kalingacables2004@gmail.com"><img src="https://i.pinimg.com/originals/88/e1/4c/88e14cc7e7fcbb0e0e09de26cec86c61.png" className="foot-logos" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <Box textAlign="center" mt={0} py={2} sx={{ bgcolor: '#C50568', color: 'white' }}>
                    <Typography variant="body2" style={{ fontWeight: "400", letterSpacing: "2px" }}>KALINGA PREMIUM @2024 || DESIGN AND DEVELOPED BY HYPERNXT</Typography>
                </Box>
            </div>
        </>
    )
}
export default Footer;