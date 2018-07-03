import React, { Component } from 'react'

import Property from './Property'

export default class PropertyList extends Component {
  // Lets do a initial setup
  // Set our state
  state = {
    error: null,
    isLoaded: false,
    properties: []
  }

  componentDidMount() {
    // Lets fetch our open houses list and save the list to our local state
    fetch("https://api.simplyrets.com/openhouses", {
      headers: {
        Authorization: "Basic " + btoa("simplyrets:simplyrets")
      }
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            properties: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, properties } = this.state
    if (error) {
      // Is there an error in loading?
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      // Are we loading? If so display the loading message
      return <div>Loading...</div>
    } else {
      // Everything is good! Lets display this list of open houses
      return (
        <div className="row">
          {properties.map(property => (
            <Property key={property.openHouseId} data={property} userId={this.props.userId}/>
          ))}
        </div>
      );
    }
  }
}
