import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// Redux
import { connect } from 'react-redux';

// Styles
import { Container, UiText } from './styled';

class Home extends Component {
  state = {};

  render() {
    return (
      <Container>
        <UiText>Home</UiText>
      </Container>
    );
  }
}

Home.defaultProps = { };

Home.propTypes = { };

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
)(Home);
