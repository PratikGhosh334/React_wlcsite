import React from 'react';
import { Typography, IconButton, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box bgcolor="primary.main" color="white" width="100%">
      <Box py={3} sx={{ maxWidth: '100%', margin: '0 auto' }}>
        <Typography variant="body1" align="center" gutterBottom>
          Connect with me on social media:
        </Typography>
        <Box mt={2} display="flex" justifyContent="center">
          <IconButton
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            aria-label="facebook"
            sx={{ mx: 1 }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            aria-label="instagram"
            sx={{ mx: 1 }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            aria-label="linkedin"
            sx={{ mx: 1 }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" align="center">
          © 2024 My Website. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
