import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductNavigation from './ProductNavigation';
import AuthNavigation from './AuthNavigation';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import UserNavigation from './UserNavigation';
const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  const {Screen, Navigator} = Tab;
  return (
    <Navigator>
      <Screen  options={{headerShown: false, tabBarLabelStyle: {fontSize: 0}, tabBarIcon: ({focused}) => <Entypo name="home" size={28} color={focused ? "#007bff" : "#8e8e93"} />}} name="Product" component={ProductNavigation} />
      <Screen options={{headerShown: false, tabBarLabelStyle: {fontSize: 0}, tabBarIcon: ({focused}) => <Entypo name="login" size={28} color={focused ? "#007bff" : "#8e8e93"} />}} name="Auth" component={AuthNavigation} />
      <Screen options={{headerShown: false, tabBarLabelStyle: {fontSize: 0}, tabBarIcon: ({focused}) => <FontAwesome name="user" size={28} color={focused ? "#007bff" : "#8e8e93"} />}} name="User" component={UserNavigation} />
    </Navigator>
  )
}

export default TabNavigation