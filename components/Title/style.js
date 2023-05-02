import {StyleSheet} from 'react-native';
import {scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
  },
});

export default style;
