import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../Config/Metrics';
import Colors from '../../theme/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    height: verticalScale(42),
    borderColor: Colors.border,
    marginVertical: verticalScale(10),
    padding: moderateScale(8),
    borderRadius: 5,
    marginBottom: verticalScale(20),
  },
  mainViewStyle: {
    flex: 0.92,
    paddingHorizontal: scale(20),
    marginTop: verticalScale(30),
  },
  headingStyle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
  }
});
