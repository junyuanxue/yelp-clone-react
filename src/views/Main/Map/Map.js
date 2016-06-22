import React, { PropTypes as T } from 'react'
import GoogleMap, { Marker } from 'google-maps-react'
import classnames from 'classnames'

import styles from './styles.module.css'

export class Map extends React.Component {
  static defaultProps = {
    center: {lat: 51.517354, lng: -0.072487}
  }

  renderMarkers() {
    return this.props.places.map(place => {
      return <Marker
                key={place.id}
                name={place.id}
                place={place}
                onClick={this.props.onMarkerClick.bind(this)}
                position={place.geometry.location} />
    })
  }

  render() {
    return (
      <GoogleMap
        center={this.props.center}
        google={this.props.google}
        className={styles.map} >
        {this.renderMarkers()}
      </GoogleMap>
    )
  }
}

export default Map
