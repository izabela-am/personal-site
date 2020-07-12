import React, { Component } from 'react';
import { Howl } from 'howler';

import darthMP3 from './assets/audio/breathing.mp3';
import r2d2MP3 from './assets/audio/processing-r2d2.mp3';

const darthVaderAudio = new Howl({
  src: [darthMP3],
  volume: 0.3,
  autoplay: false,
  preload: true,
});

const r2d2Audio = new Howl({
  src: [r2d2MP3],
  volume: 0.3,
  autoplay: false,
  preload: true,
});

const defaultState = {
  dark: false,
  toString: () => 'light',
  toggleDarkMode: () => {}
};

const ThemeContext = React.createContext(defaultState);
class ThemeProvider extends Component {
  state = {
    dark: false,
  };

  toString = () => (this.state.dark ? 'dark' : 'light');
  toggleDarkMode = () => {
    let dark = !this.state.dark;
    this.setState({ dark });

    darthVaderAudio.stop();
    r2d2Audio.stop();

    dark ? darthVaderAudio.play() : r2d2Audio.play();
  };

  render() {
    const { children } = this.props;
    const { dark } = this.state;

    return(
      <ThemeContext.Provider
        value={{
          dark,
          toggleDarkMode: this.toggleDarkMode,
          toString: this.toString,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  };
};

export default ThemeContext;
export { ThemeProvider };
