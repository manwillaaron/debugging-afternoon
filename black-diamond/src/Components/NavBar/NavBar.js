import React, { Component } from 'react';
import './NavBar.css';
import Logo from './dev-mountain-logo.png'

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="navbar-container">
        <button className="logo-container">
            <img className="logo-image" src={Logo} alt="" onClick={() => this.props.navigate('store')} />
        </button>

          <div className="navbar-links-container">
            <ul className="navbar-links">
          
              <li onClick={() => this.props.navigate('store')}>Store</li>
              <li onClick={() => this.props.navigate('cart')}>Shopping Cart</li>
              <div className= 'counter'> {this.props.counter}  </div>
            </ul>

          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default NavBar;