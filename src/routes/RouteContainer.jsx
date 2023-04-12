import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import AppContainer from './AppContainer.jsx';

import { QuizProvider } from '../context/QuizContext.js';

const RouteContainer = () => {
  return (
    <QuizProvider>
      <NavigationContainer>
        <AppContainer />
      </NavigationContainer>
    </QuizProvider>
  );
};

export default RouteContainer;
