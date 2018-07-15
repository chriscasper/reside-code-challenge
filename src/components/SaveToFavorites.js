import React, { Component } from 'react'
import SnackBar from './SnackBar'

import firebase from '../firebase.js'

export default class SaveToFavorites extends Component {
  state = {
    snackMessage: ''
  }

  // Add to Favorites
  saveToFavorites = mlsId => e => {
    e.preventDefault()

    // Lets write our data to firestore
    firebase.collection("favorites").add({
      userId: this.props.userId,
      mlsId: mlsId
    })
    .then(docRef => {
      // Lets display our Snackbar
      this.setState({
        snackMessage: "Favorite saved with ID: " + docRef.id
      })

      window.setTimeout( () => {
        this.setState({
          snackMessage: ''
        })
      } , 5000)
    })
    .catch(function(error) {
      console.error("Error adding favorite: ", error);
    });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.saveToFavorites(this.props.mlsId)} className="btn btn-primary float-right"><i className="fas fa-heart"></i> Save to Favorites</button>
        {  this.state.snackMessage ? <SnackBar snackMessage={this.state.snackMessage}/> : null }
      </div>
    );
  }
}
