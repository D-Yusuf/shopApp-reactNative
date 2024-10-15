import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ProductDetail from '../screens/ProductDetail';

const ProductNavigation = () => {
  const Stack = createNativeStackNavigator();
  const {Navigator, Screen} = Stack
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen 
        name="Product Detail" 
        component={ProductDetail} 
        options={{
          headerStyle: { color: "white" },
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitle: '',
          headerTintColor: 'white',
        }}
      />
    </Navigator>
  )
}

export default ProductNavigation
