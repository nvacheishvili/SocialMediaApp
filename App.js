import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  FlatList,
} from 'react-native';

//Custom Components
import Title from './components/Title/Title';

//FontAwesome Icons
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

//Style Imports
import style from './assets/styles/main';

const App = () => {
  //All of the items in our stories
  const data = [
    {
      firstName: 'Joseph',
      id: 1,
    },
    {
      firstName: 'Angel',
      id: 2,
    },
    {
      firstName: 'White',
      id: 3,
    },
    {
      firstName: 'Olivier',
      id: 4,
    },
    {
      firstName: 'Nata',
      id: 5,
    },
    {
      firstName: 'Adam',
      id: 6,
    },
    {
      firstName: 'Sean',
      id: 7,
    },
    {
      firstName: 'Nicolas',
      id: 8,
    },
    {
      firstName: 'Frederic',
      id: 9,
    },
  ];

  return (
    // Use the SafeAreaView component to ensure content is displayed within the safe area boundaries of the device
    <SafeAreaView>
      {/* Use ScrollView to allow users to scroll through content */}
      <ScrollView>
        {/* Use View to create a container for title and icon */}
        <View style={style.header}>
          {/* Use custom Title component to display the title */}
          <Title title={"Let's Explore"} />
          {/* Use Pressable to create a clickable component */}
          <Pressable style={style.messageIcon}>
            {/* Use FontAwesomeIcon component to display an icon from FontAwesome icon set */}
            <FontAwesomeIcon icon={faEnvelope} color={'#CACDDE'} size={20} />
            {/* Use View to create a container for message number */}
            <View style={style.messageNumberContainer}>
              {/* Use Text to display the number of messages */}
              <Text style={style.messageNumber}>2</Text>
            </View>
          </Pressable>
        </View>
        <View>{/*<FlatList data={} renderItem={} />*/}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
