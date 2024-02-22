import {StyleSheet} from 'react-native';
import {ScreenWidth, ScreenHeight} from '../../constants/Styling';

export default () =>
  StyleSheet.create({
    wrapper: {
      borderWidth: 0.7,
      borderColor: '#fff',
      width: ScreenWidth / 2 - 20,
      height: ScreenHeight / 4,
      borderRadius: 7,
      marginEnd: 15,
      marginBottom: 15,
      overflow: 'hidden',
    },
    imgStyle: {
      width: '100%',
      height: '100%',
      borderRadius: 7,
    },
    rateWrapper: {
      width: ScreenWidth / 9,
      height: ScreenWidth / 9,
      borderTopRightRadius: 7,
      backgroundColor: 'tomato',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: 0,
    },
    rateText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: 15,
    },
  });