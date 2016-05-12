import React, {
  Component,
  PropTypes,
} from 'react';
import radium from 'radium';

import styles from './styles';

class Banner extends Component {

  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.hero}>
          {this.props.message}
        </div>
      </div>
    );
  }
}

Banner.propTypes = {
  message: PropTypes.string,
};

export default radium(Banner);
