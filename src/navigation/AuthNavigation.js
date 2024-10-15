import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Register from '../screens/Register'
const AuthNavigation = () => {
    const {Navigator, Screen} = createNativeStackNavigator()
  return (
    <Navigator>
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    </Navigator>
  )
}

export default AuthNavigation