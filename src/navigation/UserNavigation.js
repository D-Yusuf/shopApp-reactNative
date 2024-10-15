import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../screens/Profile'

const UserNavigation = () => {
    const {Navigator, Screen} = createNativeStackNavigator()
    return (
      <Navigator>
        <Screen name="Profile" component={Profile} />
      </Navigator>
    )
}

export default UserNavigation