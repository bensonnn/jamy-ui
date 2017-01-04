import React, { Proptypes }    from "react";
import Header from './components/Header';
import SoundManager from './components/SoundManager';
import Controls from './components/Controls';

export default class App extends React.Component {

  render() {
    return (
      <div className="container">
        <SoundManager />
        <Header />
        <Controls />
        { this.props.children }
      </div>
    );
  }
};
