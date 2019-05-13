import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// Styles
import { Container, UiText } from './styled';

class Card2 extends Component {
  state = {};

  render() {
    return (
      <Container>
        <UiText>Card2</UiText>
      </Container>
    );
  }
}

Card2.defaultProps = {};

Card2.propTypes = {};

export default Card2;
