import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';

const Stack = createNativeStackNavigator();
function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="LoginPage" 
        component={Login} 
        options={{
          headerShown:false,
        }} />
        <Stack.Screen name="ProductsPage" component={Products} options={{
          title: 'Ürünler',
          headerTitleStyle: { color: 'white' },
          headerStyle: { backgroundColor: '#64b5f6' }
        }} />
        <Stack.Screen name="DetailPage" component={Detail} options={{
          title: 'Ürün Detay',
          headerTitleStyle: { color: 'white' },
          headerStyle: { backgroundColor: '#64b5f6' },
          headerTintColor: 'white',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;