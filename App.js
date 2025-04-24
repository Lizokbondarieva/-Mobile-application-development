import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TouchFeedbackScreen from './screens/TouchFeedbackScreen';
import ScrollExampleScreen from './screens/ScrollExampleScreen';
import SwipeListScreen from './screens/SwipeListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TouchFeedback">
        <Stack.Screen name="TouchFeedback" component={TouchFeedbackScreen} options={{ title: 'Touch Feedback' }} />
        <Stack.Screen name="ScrollExample" component={ScrollExampleScreen} options={{ title: 'Scroll Example' }} />
        <Stack.Screen name="SwipeList" component={SwipeListScreen} options={{ title: 'Swipe List' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
