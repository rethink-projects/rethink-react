import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// Styles
import { Container, UiText } from './styled';

class Card extends Component {
  state = {};

  render() {
    return (
      <Container>
        <UiText>Card</UiText>
      </Container>
    );
  }
}

Card.defaultProps = {};

Card.propTypes = {};

export default Card;
