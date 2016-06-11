import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import 'font-awesome/css/font-awesome.css';
import styles from './styles.module.css';

class App extends React.Component {
  render() {
    return (<div>Content</div>)
  }
}

// const App = React.createClass({
//   render: function() {
//     return (
//       <div className={styles.wrapper}>
//         <h1>
//           <i className="fa fa-star"></i>
//           Environment: {__NODE_ENV__}
//         </h1>
//       </div>
//     )
//   }
// });

module.exports = App;
