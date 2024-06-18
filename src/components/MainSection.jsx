import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import mainImage from '../images/Pratik.jpeg'; 

const importFonts = {
  '@import': "url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap')",
};

function MainSection() {
  return (
    <Container sx={{ textAlign: 'center', minHeight: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '50px', paddingBottom: '20px' }}>
      {/* Inline styles for @import */}
      <style>{importFonts['@import']}</style>
      <Box sx={{ mb: 5 }}>
        <img src={mainImage} alt="Main Image" style={{ width: '170px', height: '170px', objectFit: 'cover', borderRadius: '20%' }} />
      </Box>
      <Typography variant="body1" sx={{ fontSize: '1.3rem' }}>
        
     <strong>Hello, I'm Pratik </strong>, a newbie Web developer & Programmer,
      eagerly embarking on the journey to 
      turn ideas into<em> functional and elegant websites and softwares.</em> 
    
      </Typography>
    </Container>
  );
}

export default MainSection;
