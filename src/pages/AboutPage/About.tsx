import React from 'react';
import './About.css';
import Navigation from '../../components/Navigation/navigation';

export default class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <a href="https://github.com/DmitryKremenetsky">GitHub click</a>
          <a href="https://github.com/DmitryKremenetsky/rss-components-task">
            repo link click
          </a>
        </div>
      </div>
    );
  }
}
