import React, { useRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import NavigationService from './utils/NavigationService';

import HomeScreen from '~/ui/screens/home';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default function RootStack({ isSignedIn }) {
  const navContaner = useRef();
  return (
    <NavigationContainer ref={navContaner}>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainStack} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { NavigationService };
