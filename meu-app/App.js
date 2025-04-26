import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './RegisterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen}
          options={{ title: 'Criar Conta' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}