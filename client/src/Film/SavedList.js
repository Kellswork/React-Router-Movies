import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Films:</h3>
        {this.props.list.map(movie => (
          <span className="saved-film">{movie.title}</span>
        ))}
       <Link><div className="home-button">Home</div></Link>
      </div>
    );
  }
}
