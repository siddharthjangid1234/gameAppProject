// 3rd Party Imports
import Toast from 'react-native-simple-toast';
import Colors from '../theme/Colors';
// Local Imports

// Toast Development Message Show
const ToastInDevelopment = () => {
  Toast.show('In Development', Toast.SHORT, {
    backgroundColor: Colors.primaryColor,
    textColor: Colors.white,
    tapToDismissEnabled: true,
  });
};

// Toast Success Message
const ToastSuccess = SuccessMsg => {
  Toast.show(SuccessMsg, Toast.SHORT, {
    backgroundColor: Colors.primaryColor,
    textColor: Colors.white,
    tapToDismissEnabled: true,
  });
};

// Toast Error Message
const ToastError = errMsg => {
  Toast.show(errMsg, Toast.SHORT, {
    backgroundColor: Colors.red,
    textColor: Colors.white,
    tapToDismissEnabled: true,
  });
};

export {ToastInDevelopment, ToastSuccess, ToastError};
