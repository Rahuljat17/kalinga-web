import React from "react";
import './Footer.css';
import { Box, Typography, Grid, Button } from '@mui/material';
import { WhatsApp, Phone, Email, LocationOn, Instagram, LinkedIn, YouTube, Facebook, Twitter } from '@mui/icons-material';

const Footer = () => {
    return (
        <>
            <div>
                <Box sx={{ bgcolor: '#0A1C43', color: 'white', pt: 4, pb: 2 }}>
                    <Grid container spacing={4} justifyContent="center">
                        {/* Logo and Address */}
                        <Grid item xs={12} sm={6} md={3} textAlign={{ xs: 'center', md: 'left' }}>
                            <img src="/logo.png" alt="Kalinga Premium" style={{ width: '150px', marginBottom: '10px' }} />
                            <Typography variant="body1">L-1, Shiv Shakti Plaza, Mahavir Enclave</Typography>
                            <Typography variant="body1">Dwarka Sector- 1, New Delhi- 110045</Typography>
                        </Grid>

                        {/* Connect with Us */}
                        <Grid item xs={12} sm={6} md={3} textAlign={{ xs: 'center', md: 'left' }}>
                            <Typography variant="h6">Connect with us</Typography>
                            <Box display="flex" alignItems="center">
                                <Phone sx={{ mr: 1 }} /> <Typography variant="body2">+91 99603 03633</Typography>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Email sx={{ mr: 1 }} /> <Typography variant="body2">kalingacables2004@gmail.com</Typography>
                            </Box>
                        </Grid>

                        {/* Our Network */}
                        <Grid item xs={12} sm={6} md={3} textAlign={{ xs: 'center', md: 'left' }}>
                            <Typography variant="h6">Our network</Typography>
                            <Typography variant="body2">Kalinga Cables and Conduit</Typography>
                            <Typography variant="body2">Kalinga Cables</Typography>
                            <Typography variant="body2">Kalinga Hotels and Resorts</Typography>
                            <Typography variant="body2">Sahni Strips</Typography>
                        </Grid>

                        {/* Get in Touch */}
                        <Grid item xs={12} sm={6} md={3} textAlign={{ xs: 'center', md: 'left' }}>
                            <Typography variant="h6">Get in touch</Typography>
                            <Button
                                variant="contained"
                                startIcon={<WhatsApp />}
                                sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#20c357' }, mb: 2 }}
                            >
                                Contact us
                            </Button>
                            <Typography variant="body2">Contact with us today</Typography>
                            <Box display="flex" justifyContent={{ xs: 'center', md: 'start' }} mt={1}>
                                <Twitter sx={{ mr: 1 }} />
                                <Instagram sx={{ mr: 1 }} />
                                <YouTube sx={{ mr: 1 }} />
                                <LinkedIn sx={{ mr: 1 }} />
                                <Facebook sx={{ mr: 1 }} />
                            </Box>
                        </Grid>
                    </Grid>
                    {/* Footer Bottom */}
                    <Box textAlign="center" mt={4} py={2} sx={{ bgcolor: '#D1005B', color: 'white' }}>
                        <Typography variant="body2">KALINGA PREMIUM @2024 || DESIGN AND DEVELOPED BY HYPERNXT</Typography>
                    </Box>
                </Box>
            </div>
        </>
    )
}
export default Footer;