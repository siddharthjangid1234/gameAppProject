import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import {moderateScale, scale, verticalScale} from '../../Config/Metrics';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: verticalScale(10),
    width: '100%',
    marginTop: verticalScale(30),
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
  btnViewStyle: {
    width: '26%',
    height: verticalScale(32),
  },
  playerNameStyle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
  },
  winTextStyle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primaryColor,
  },
  leftSideView: {
    width: '56%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainViewStyle: {
    marginHorizontal: scale(20),
    flex: 0.95,
    backgroundColor: Colors.AppBgColor,
  },
  seperator: {
    height: verticalScale(1),
    backgroundColor: Colors.border,
    marginVertical: verticalScale(20),
  },
  rightSideView: {
    width: '50%',
  },
  leftSideViewStyle: {
    width: '50%',
  },
  btnMainContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  blackTextStyle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: verticalScale(15),
  }
});
