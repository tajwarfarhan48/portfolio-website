import { FC } from 'react'

import GlobalStyles from './GlobalStyles';
import Alert from 'components/Alert/Alert'
import NavBar from 'components/NavBar/NavBar';
import Hero from 'components/Hero/Hero';
import Intro from 'components/Intro/Intro';
import Skills from 'components/Skills/Skills';
import Projects from 'components/Projects/Projects';
import Education from 'components/Education/Education';
import Contact from 'components/Contact/Contact';
import Footer from 'components/Footer/Footer';

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <div className="App flexCenter">
        <div className="container" id="container">
          <Alert />
          <NavBar />
          <Hero />
          <Intro />
          <Skills/>
          <Projects />
          <Education />
          <Contact />
          <Footer />
          </div>
      </div>
    </>
  );
}

export default App;
