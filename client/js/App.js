import React, { Proptypes }    from "react";
import Header from './components/Header';
import SoundManager from './components/SoundManager';

export default class App extends React.Component {

  render() {
    return (
      <div className="container">
        <SoundManager />
        <Header />
          { this.props.children }
      </div>
    );
  }
};
