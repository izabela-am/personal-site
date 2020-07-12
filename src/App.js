import React, { useContext } from 'react';
import { GrGithub, GrTwitter, GrLinkedin } from 'react-icons/gr'

import GlobalStyle, { NavigationBar, ToggleButton, PageContent, LinksContainer, PageWrapper } from './styles/global';

import darthVaderImg from './assets/darthvader.png';
import r2d2Img from './assets/r2d2.png';
import { EmpireSVG, LightSVG } from './assets/svgIcons';

import ThemeContext from './ThemeProvider';

export default function App() {
  const { dark, toggleDarkMode } = useContext(ThemeContext);

  const regularFontColor = dark ? `#f8f9fa` : `#222`;
  const nameColor = dark ? `#942412` : `#86D1FD`;
  const navbarColor = dark ? `#131313` : `#F8F9FA`;
  const bgColor = dark ? `#222` : `#fff`;

  const description = dark ?
        `Fullstack Engineer by day, Imperial enforcer by night` :
        `Fullstack Engineer by day, Rebel scum by night`;

  return (
    <PageWrapper
      style={{
        backgroundColor: bgColor
      }}
    >

      <NavigationBar style={{ backgroundColor: navbarColor }}>
        {dark ? <EmpireSVG/> : <LightSVG/>}
      </NavigationBar>

      <PageContent>
        <img
          src={dark ? darthVaderImg : r2d2Img }
          alt={dark ? 'Darth Vader' : 'R2D2'}
          width={150}
        />

        <p style={{ color: regularFontColor }}>
          <b>A padawan Software Engineer discovering the ways of the code.</b>
        </p>

        <h1 style={{ color: regularFontColor }}>
          Izabela <span style={{ color: nameColor }}>Matos</span>
        </h1>

        <p style={{ color: regularFontColor }}>
          {description}
        </p>
        <br/>
        
        <LinksContainer>
          <a
            href="https://github.com/izabela-am"
            style={{ color: nameColor }} 
          >
            <GrGithub/>
          </a>

          <a
            href="https://www.linkedin.com/in/izabela-matos/"
            style={{ color: nameColor }} 
          >
            <GrLinkedin/>
          </a>
          
          <a
            href="https://twitter.com/izabela29am"
            style={{ color: nameColor }}   
          >
            <GrTwitter/>
          </a>
        </LinksContainer>

        <ToggleButton
          onClick={toggleDarkMode}
          style={{
            backgroundColor: nameColor,
            color: navbarColor
          }}>
          Feel the Force
        </ToggleButton>
      </PageContent>
      <GlobalStyle/>

    </PageWrapper>
  );
};
