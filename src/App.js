import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import SkillsSection from './components/SkillsSection';
import QuestionsSection from './components/QuestionsSection';
import Footer from './components/Footer';
import { Container, CssBaseline } from '@mui/material';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container>
        <MainSection />
        <SkillsSection />
        <QuestionsSection />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
