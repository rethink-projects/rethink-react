import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// Styles
import { Container, UiText } from './styled';

class User extends Component {
  state = {};

  render() {
    return (
      <Container>
        <UiText>User</UiText>
      </Container>
    );
  }
}

User.defaultProps = {};

User.propTypes = {};

export default User;
