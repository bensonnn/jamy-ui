import React, { Proptypes } from "react";
import { Link } from 'react-router';

export default class Header extends React.Component {

    render() {
      return (
        <div className='header'>
            <div className="links">
                <Link to='/'><span className="logo">Jamy</span></Link>
                <Link to='/latest'>Latest</Link>
                <Link to='/popular'>Trending</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
      )
    }
};
