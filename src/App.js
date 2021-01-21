/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SignIn, SplashScreen } from './pages';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import FlashMessage from "react-native-flash-message";
import { Loading } from './components';

const MainApp = () =>{
  const {isLoading} = useSelector((state) => state.globalReducer)
  return (
    <NavigationContainer>
      <Router/>
      <FlashMessage position="top" />
      {/* && adalah bernilai true */}
      {isLoading &&  <Loading/>}
    </NavigationContainer>
    );
}

const App = ()  => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};


export default App;
