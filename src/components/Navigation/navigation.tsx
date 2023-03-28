import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

export default class Navigation extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <div>
          <h2>
            {window.location.pathname === '/'
              ? 'Home'
              : window.location.pathname === '/about'
              ? 'About'
              : window.location.pathname === '/form'
              ? 'Form'
              : 'Error'}{' '}
            page
          </h2>
        </div>
        <div className="link-container">
          <Link className="link" to={'/'}>
            Home
          </Link>
          <Link className="link" to={'/about'}>
            About us
          </Link>
          <Link className="link" to={'/form'}>
            From Page
          </Link>
        </div>
      </div>
    );
  }
}
