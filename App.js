import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

//Custom Components
import Title from './components/Title/Title';

//FontAwesome Icons
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

const App = () => {
  return (
    // Use the SafeAreaView component to ensure content is displayed within the safe area boundaries of the device
    <SafeAreaView>
      {/* Use ScrollView to allow users to scroll through content */}
      <ScrollView>
        {/* Use View to create a container for title and icon */}
        <View
          style={{
            paddingTop: 30,
            paddingRight: 26,
            paddingLeft: 17,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {/* Use custom Title component to display the title */}
          <Title title={"Let's Explore"} />
          {/* Use FontAwesomeIcon component to display an icon from FontAwesome icon set */}
          <FontAwesomeIcon icon={faEnvelope} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
