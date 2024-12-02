// 3rd Party imports
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { scale, verticalScale } from '../../Config/Metrics';
import Colors from '../../theme/Colors';

const CustomButton = ({
  btnLabel,
  onPress,
  btnLabelStyles,
  btnViewStyle,
  disabled = false,
}) => {
  const btnLabelStyle = StyleSheet.compose(styles.btnLabel, btnLabelStyles);
  const btnView = StyleSheet.compose(styles.btnView, btnViewStyle);

  return (
    <TouchableOpacity style={btnView} onPress={onPress} disabled={disabled}>
      <Text style={btnLabelStyle}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnView: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 6,
    height: verticalScale(45),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: scale(20),
  },
  btnLabel: {
    fontSize: 16,
    fontWeight: 700,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default CustomButton;
