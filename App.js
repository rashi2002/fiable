import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/HomeScreen';
import Authentication from './Components/Authentication';
import MapRecording from './Components/MapRecording';
import Rewards from './Components/Rewards';
import Settings from './Components/Settings';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Authentication"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
          name="Authentication" 
          component={Authentication}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="MapRecording"
          component={MapRecording}
        />
        <Stack.Screen
          name="Rewards"
          component={Rewards}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;