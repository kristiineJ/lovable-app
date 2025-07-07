import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SpeakingCardsScreen from './screens/SpeakingCardsScreen';
import LogMomentScreen from './screens/LogMomentScreen';
import SpeakingCardsScreen from './screens/SpeakingCardsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SpeakingCards" component={SpeakingCardsScreen} />
        <Stack.Screen name="LogMoment" component={LogMomentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// inside your Stack.Navigator:
<Stack.Screen
  name="SpeakingCards"
  component={SpeakingCardsScreen}
  options={{ title: 'Speaking Cards' }}
/>
