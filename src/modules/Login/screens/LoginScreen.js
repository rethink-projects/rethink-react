import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// Redux
import { connect } from 'react-redux';

// Styles
import { Container, UiText } from './styled';

class Login extends Component {
  state = {};

  render() {
    return (
      <Container>
        <UiText>Login</UiText>
      </Container>
    );
  }
}

Login.defaultProps = { };

Login.propTypes = { };

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
)(Login);
