import {StyleSheet} from 'react-native';
import {scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    fontFamily: 'Inter',
    lineHeight: scaleFontSize(19),
    fontSize: scaleFontSize(16),
  },
});

export default style;
