// App.js
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Navigator from './src/services/navigationStack';
import {persistor, store} from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
const App = () => {
  return (
    <GestureHandlerRootView style={styles.flexView}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  flexView: {flex: 1},
});
export default App;
