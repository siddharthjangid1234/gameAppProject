import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from '../../Config/Metrics';
import Colors from '../../theme/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(20),
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    marginVertical: verticalScale(10),
    padding: moderateScale(8),
    borderRadius: 5,
  },
});
