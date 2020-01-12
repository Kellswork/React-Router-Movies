import React, { Component } from 'react';
import axios from 'axios';

export default class Film extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: null
    };
  }


  // Uncomment this code when you're ready to work on the saveList
  // componentWillReceiveProps(newProps){
  //   if(this.props.match.params.id !== newProps.match.params.id){
  //     this.fetchMovie(newProps.match.params.id);
  //   }
  // }

  // saveFilm = () => {
  //   const addToSavedList = this.props.addToSavedList;
  //   addToSavedList(this.state.movie)
  // }

  render() {
    <div> Hi again lol filmCard</div>
  }
}
