import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// Styles
import { Container, UiText } from './styled';

class InputText extends Component {
  state = {};

  render() {
    return (
      <Container>
        <UiText>InputText</UiText>
      </Container>
    );
  }
}

InputText.defaultProps = {};

InputText.propTypes = {};

export default InputText;
