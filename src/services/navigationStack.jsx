import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import NavigationRoutes from '../routes/NavigationRoutes';
import { authScreens, mainScreens } from '../routes/appRoutes';
import Colors from '../theme/Colors';

// Import your navigators and components

const AuthStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const stackScreenOptions = {
  orientation: 'portrait',
  headerStyle: {
    backgroundColor: Colors.AppBgColor,
  },
  headerTintColor: Colors.Primary,
  headerTitleStyle: {
    fontWeight: '500',
  },
  headerTitleAlign: 'center',
};

// Auth Navigator (Login screen only)
const AuthNavigator = () => (
  <AuthStack.Navigator
    screenOptions={stackScreenOptions}
    initialRouteName={NavigationRoutes.Login}>
    {Object.entries(authScreens).map(([name, screen]) => (
      <AuthStack.Screen
        name={name}
        key={name}
        component={screen.component}
        options={screen.options}
      />
    ))}
  </AuthStack.Navigator>
);

// Create a separate component for MainStack
const MainStackNavigator = () => (
  <MainStack.Navigator
    screenOptions={stackScreenOptions}>
    {Object.entries(mainScreens).map(([name, screen]) => (
      <MainStack.Screen
        name={name}
        key={name}
        component={screen.component}
        options={screen.options}
      />
    ))}
  </MainStack.Navigator>
);

const App = () => {
  const {isGameScreenVisit} = useSelector(state => state.game);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.primaryColor}
        translucent={false}
      />
      {isGameScreenVisit ? <MainStackNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;
