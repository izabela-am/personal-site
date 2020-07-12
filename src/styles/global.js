import styled, { createGlobalStyle } from 'styled-components';
import {shade} from 'polished';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-font-smoothing: antialiased;
    font-family: 'Raleway', sans-serif;
    background-color: #222;
  }

  button:hover {
    transform: translateY(2px);
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  transition: 0.5s ease-in-out;
  transition: background 0.45s ease-in-out;
`;

export const NavigationBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100vw;

  transition: 0.45s ease-in-out;
  transition: background 0.45s ease-in-out;

  svg {
    width: 40px;
  }
`;

export const PageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 120px;
  width: 100vw;
  color: white;

  transition: 0.45s ease-in-out;
  transition: background 0.45s ease-in-out;

  img {
    margin-bottom: 10px;
  }

  h1 {
    font-size: 80px;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  p {
    margin-top: 10px;
    font-size: 15px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 50px;
  
  a {
    text-decoration: none;
    color: #6c757d;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(2px);
    }
  }

  a + a {
    margin-left: 30px;
  }
`;

export const ToggleButton = styled.button`
  transition: transform 0.2s;

  margin-top: 10px;
  border: none;
  border-radius: 10px;
  background-color: #6c757d;
  color: white;
  height: 50px;
  width: 200px;
`;
