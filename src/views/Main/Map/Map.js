import React, { PropTypes as T } from 'react'
import GoogleMap from 'google-maps-react'
import classnames from 'classnames'

import styles from './styles.module.css'

export class Map extends React.Component {
  static defaultProps = {
    center: {lat: 51.517354, lng: -0.072487}
  };

  render() {
    return (
      <GoogleMap
        center={this.props.center}
        google={this.props.google}
        className={styles.map} >
      </GoogleMap>
    )
  }
}

export default Map
