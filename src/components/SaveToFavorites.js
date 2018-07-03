import React, { Component } from 'react'
import firebase from '../firebase.js'

export default class SaveToFavorites extends Component {
  // Add to Favorites
  saveToFavorites = mlsId => e => {
    e.preventDefault()

    // Lets write our data to firestore
    firebase.collection("favorites").add({
      userId: this.props.userId,
      mlsId: mlsId
    })
    .then(function(docRef) {
      console.log("Favorite saved with ID: ", docRef.id);
      alert("Favorite Saved!")
    })
    .catch(function(error) {
      console.error("Error adding favorite: ", error);
    });
  }

  render() {
    return (
      <button type="button" onClick={this.saveToFavorites(this.props.mlsId)} className="btn btn-primary float-right"><i className="fas fa-heart"></i> Save to Favorites</button>
    );
  }
}
