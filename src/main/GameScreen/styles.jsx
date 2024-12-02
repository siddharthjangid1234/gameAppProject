import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import {moderateScale, verticalScale} from '../../Config/Metrics';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  button: {
    padding: moderateScale(10),
    backgroundColor: Colors.border,
    borderRadius: 5,
  },
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
