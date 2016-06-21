import React from 'react'
import GoogleMap, {GoogleApiWrapper} from 'google-maps-react'
import {searchNearby} from 'utils/googleApiHelpers'

export class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
      pagination: null
    }
  }

  onReady(mapProps, map) {
    const {google} = this.props;
    const opts = {
      location: map.center,
      radius: '500',
      types: ['cafe']
    }
    searchNearby(google, map, opts)
      .then((results, pagination) => {
        this.setState({
          places: results
        })
      }).catch((status, result) => {
        console.log('Error: ' + status + result);
      })
  }

  render() {
    return (
      <div>
        <GoogleMap
          onReady={this.onReady.bind(this)}
          google={this.props.google}
          visible={false}>

          {this.state.places.map(place => {
            return (
              <div key={place.id}>
                {place.name}
              </div>
            )
          })}
        </GoogleMap>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: __GOOGLE_API_KEY__
})(Container);
