// Import StyleSheet from react-native
import {StyleSheet} from 'react-native';

// Define a new StyleSheet object
const style = StyleSheet.create({
  // Define styles for the header container
  header: {
    paddingTop: 30,
    paddingRight: 26,
    paddingLeft: 17,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // Define styles for the message icon
  messageIcon: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 100,
  },
  // Define styles for the message number container
  messageNumberContainer: {
    width: 10,
    height: 10,
    backgroundColor: '#F35BAC',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 7,
    top: 10,
  },
  // Define styles for the message number text
  messageNumber: {
    fontSize: 6,
    fontFamily: 'Inter',
    lineHeight: 7,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  userStoryContainer: {
    paddingHorizontal: 28,
    marginTop: 12,
    height: 100,
  },
  userPostContainer: {
    marginTop: 30,
    height: '100%',
    paddingHorizontal: 24,
  },
});

export default style;
