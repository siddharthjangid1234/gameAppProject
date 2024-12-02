// 3rd Party imports
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Colors from '../../theme/Colors';
import styles from './styles';

// Local imports

const CustomNavBar = ({
  title,
  containerStyle,
  navContainer,
  titleStyle,
}) => {
  const navStyle = StyleSheet.compose([styles.container], navContainer);
  const headerStyle = StyleSheet.compose([styles.title], titleStyle);

  return (
    <SafeAreaView style={[styles.mainContainer, containerStyle]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.primaryColor}
        translucent={false}
      />
      <View style={navStyle}>
        <Text style={headerStyle} numberOfLines={1}>
          {title}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CustomNavBar;
