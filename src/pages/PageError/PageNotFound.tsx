import React from 'react';
import Navigation from '../../components/Navigation/navigation';

export default class PageError extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <h1>Page not found 404</h1>
      </div>
    );
  }
}
