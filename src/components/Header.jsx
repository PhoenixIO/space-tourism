import {Component} from 'react';
import {Link} from 'react-router-dom';

import '../assets/css/Header.scss';
import Logo from '../assets/images/logo.png';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/" className="header-logo">
          <img src={Logo} alt="space logo" />
          <div className="logo-title">CosmoTravel</div>
        </Link>
        <Link to="/about" className="glitch-btn header-btn">About website</Link>
      </header>
    );
  }
}