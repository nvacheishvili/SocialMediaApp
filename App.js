import React, {useState} from 'react';
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
import UserStory from './components/UserStory/UserStory';

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
  // Define page size constant for the number of items to be displayed per page
  const pageSize = 4;

  // Define state variable for the current page number
  // so that we know how many pages we have fetched already
  const [pageNumber, setPageNumber] = useState(1);

  // Define state variable for the loading status of the flatlist,
  // will be used when we'll be fetching data on scroll until we complete the fetch
  const [isLoading, setIsLoading] = useState(false);

  // Define state variable for the data to be rendered on the page
  const [renderedData, setRenderedData] = useState(data.slice(0, pageSize));

  /**
   * function that returns the data for the page to be fetched
   * @param data - all the data
   * @param pageNumber - page number to fetch
   * @param pageSize - number of items to fetch for the page
   */
  const pagination = (data, pageNumber, pageSize) => {
    let startIndex = (pageNumber - 1) * pageSize;
    //don't return the information that does not exist inside the data array
    if (startIndex >= data.length) {
      return [];
    }
    //set the page number, to the page number that we wanted to fetch so that we have information
    //about which page was the one that was last fetched
    setPageNumber(pageNumber);
    return data.slice(startIndex, startIndex + pageSize);
  };

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
        {/* Use View to create a container for the user stories */}
        <View style={style.userStoryContainer}>
          {/* Use FlatList to display user stories */}
          <FlatList
            //when the user scrolls through half of the data call onEndReached function
            onEndReachedThreshold={0.5}
            keyExtractor={item => item.id.toString()}
            onEndReached={() => {
              //if we are not already in the middle of fetching data then fetch the data
              if (!isLoading) {
                //set is loading to true because we just started fetching data
                setIsLoading(true);
                setRenderedData(prev => [
                  ...prev,
                  ...pagination(data, pageNumber + 1, pageSize),
                ]);
                //after updating rendered data we have to set is loading to false, because we loaded the data we needed
                setIsLoading(false);
              }
            }}
            // Hide horizontal scroll indicator
            showsHorizontalScrollIndicator={false}
            // Set FlatList to display horizontally
            horizontal={true}
            // Pass in data to be rendered in FlatList
            data={renderedData}
            // Define how each item should be rendered
            renderItem={({item}) => <UserStory firstName={item.firstName} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
