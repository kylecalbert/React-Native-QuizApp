import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Finish from '../screens/Finish/Finish';
import Quiz from '../screens/Quiz/Quiz';
import Starter from '../screens/Starter/Starter';
import Results from '../screens/Results/Results';

const Stack = createNativeStackNavigator();

const AppContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Starter" component={Starter} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Finish" component={Finish} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
};

export default AppContainer;
