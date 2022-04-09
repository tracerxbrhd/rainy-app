import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/reduxStore'
import { View } from 'react-native';

import WeatherPageContainer from './components/weatherPage/weatherPageContainer'

const YourApp = () => {
  return (
    <Provider store={store}>
      <View 
      style={{ 
            flex: 1, 
            justifyContent: "center", 
            alignItems: "center",
            margin: "auto",
        }}>
          <WeatherPageContainer />
      </View>
    </Provider>
  );
}

export default YourApp;