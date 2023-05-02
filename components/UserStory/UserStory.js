import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import UserProfileImage from '../UserProfileImage/UserProfileImage';

import style from './style';

// Define a new React component called UserStory
const UserStory = props => {
  // Render a container view for the user story
  return (
    <View style={style.storyContainer}>
      <UserProfileImage />
      {/* Render the user's first name as text */}
      <Text style={style.name}>{props.firstName}</Text>
    </View>
  );
};

// Define PropTypes for the UserStory component
UserStory.propTypes = {
  // The first name of the user as a required string
  firstName: PropTypes.string.isRequired,
};

export default UserStory;
