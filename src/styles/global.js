import styled, { createGlobalStyle } from 'styled-components';

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

export const ToggleButton = styled.div`
  margin-top: 20px;
  border: none;
  background-color: none;

  .switch {
    position: absolute;
    margin-left: -9999px;
    visibility: hidden;
  }

  .switch + label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
  }

  .switch--shadow + label {
    padding: 2px;
    width: 120px;
    height: 60px;
    background-color: transparent;
    border-radius: 60px;
  }

  .switch--shadow + label:before,
  .switch--shadow + label:after {
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    content: '';
  }
  .switch--shadow + label:before {
    right: 1px;
    background-color: #86D1FD;
    border-radius: 60px;
    transition: all 0.4s;
  }
  .switch--shadow + label:after {
    width: 62px;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.4s;
  }

  .switch--shadow:checked + label:before {
    background-color: #930700;
  }
  .switch--shadow:checked + label:after {
    transform: translateX(60px);
  }
`;
