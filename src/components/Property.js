import React, { Component } from 'react'
import CurrencyFormat from 'react-currency-format'
import Moment from 'react-moment'

import SaveToFavorites from './SaveToFavorites'

export default class Property extends Component {

  // Render the attributes of the property
  renderPropertyAttrs = (property) => (
    <dl className="row">
      <dt className="col-sm-5">Stories</dt>
      <dd className="col-sm-7">{property.stories}</dd>
      <dt className="col-sm-5">Bedrooms</dt>
      <dd className="col-sm-7">{property.bedrooms}</dd>
      <dt className="col-sm-5">Full Baths</dt>
      <dd className="col-sm-7">{property.bathsFull}</dd>
      <dt className="col-sm-5">Half Baths</dt>
      <dd className="col-sm-7">{property.bathsHalf}</dd>
    </dl>
  )

  render() {
    const propertyObj = this.props.data

    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-4">
        <div className="card">
          <img className="card-img-top" src={propertyObj.listing.photos[0]} alt=""/>
          <div className="card-img-overlay">
            <SaveToFavorites mlsId={propertyObj.listing.mlsId} userId={this.props.userId} />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              List Price: <CurrencyFormat value={propertyObj.listing.listPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </h5>
            <ul className="list-unstyled">
              <li>Listed on: <Moment format="MM/DD/YYYY">{propertyObj.listing.listDate}</Moment></li>
              <li>MLSID: {propertyObj.listing.mlsId}</li>
            </ul>
            {this.renderPropertyAttrs(propertyObj.listing.property)}
          </div>
        </div>
      </div>
    );
  }
}
