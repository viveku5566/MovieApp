import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import TabNavigation from './src/navigation/TabNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};