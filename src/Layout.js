import React, {Component} from 'react'
import styled from 'styled-components'

import logo from './logo.png'

const PageContainer = styled.div`
  padding-top: 4.5rem;
`

const FooterContainer = styled.footer `
    padding: 4.5rem;
    background-color: #f5f5f5;
`

export default class Layout extends Component {
  // We set update to false since this component never needs to update
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <PageContainer>
        <nav className="navbar navbar-dark bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={logo} height="30" className="d-inline-block align-top" alt="Reside Code Challenge"/>
            </a>
          </div>
        </nav>
        <div className="container">
          {this.props.component}
        </div>
        <FooterContainer className="footer">
          <div className="container">
            <p>Reside Code Challenge</p>
          </div>
        </FooterContainer>
      </PageContainer>
    )
  }
}
