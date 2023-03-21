import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

export default class Navigation extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <div className="link-container">
          <Link className="link" to={'/'}>
            Home
          </Link>
          <Link className="link" to={'/about'}>
            About us
          </Link>
        </div>
      </div>
    );
  }
}
