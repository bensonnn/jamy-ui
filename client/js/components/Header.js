import React, { Proptypes } from "react";
import { Link } from 'react-router';

export default class Header extends React.Component {

    render() {
      let path = this.props.location.pathname;
      return (
        <div className='header'>
            <div className="links">
                <Link to='/'><span className="logo">Jamy</span></Link>
                <Link className={ path === '/latest' ? 'active' : null } to='/latest'>Latest</Link>
                <Link className={ path === '/popular' ? 'active' : null } to='/popular'>Trending</Link>
                <Link className={ path === '/about' ? 'active' : null } to='/about'>About</Link>
            </div>
        </div>
      )
    }
};
