import {Platform, StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import { scale, verticalScale } from '../../Config/Metrics';

export default StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    backgroundColor: Colors.primaryColor,
    height: Platform.OS === 'android' ? verticalScale(50) : verticalScale(100),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center content horizontally
    height: scale(60),
    marginHorizontal: scale(10),
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.white,
    textAlign: 'center', // Center text within Text component
    maxWidth: scale(190),
  },
});
