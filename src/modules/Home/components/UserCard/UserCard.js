import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// Styles
import { Container, UiText } from './styled';

class UserCard extends Component {
  state = {};

  render() {
    return (
      <Container>
        <UiText>UserCard</UiText>
      </Container>
    );
  }
}

UserCard.defaultProps = {};

UserCard.propTypes = {};

export default UserCard;
