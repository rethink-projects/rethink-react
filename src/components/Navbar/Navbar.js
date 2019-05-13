import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// Styles
import { Container, UiText } from './styled';

class Navbar extends Component {
  state = {};

  render() {
    return (
      <Container>
        <UiText>Navbar</UiText>
      </Container>
    );
  }
}

Navbar.defaultProps = {};

Navbar.propTypes = {};

export default Navbar;
