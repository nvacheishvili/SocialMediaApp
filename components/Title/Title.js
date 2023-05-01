import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';
const Title = props => {
  return <Text style={style.title}>{props.title}</Text>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
