import React, { Component } from 'react'
import styled from 'styled-components'

const SnackBarContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  color: #fff;
  background: #000;
  z-index: 100;
  padding: 2rem;
`

export default class SnackBar extends Component {

  render() {

    return (
      <SnackBarContainer>
        <p>{this.props.snackMessage}</p>
      </SnackBarContainer>
    );
  }
}
