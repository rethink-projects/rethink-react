import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// Styles
import { Container, UiText } from './styled';

class CardUser extends Component {
  state = {};

  render() {
    return (
      <Container>
        <UiText>CardUser</UiText>
      </Container>
    );
  }
}

CardUser.defaultProps = {};

CardUser.propTypes = {};

export default CardUser;
