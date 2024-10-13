import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Categories from '../components/Categories'
import Items from '../components/Items'
const Home = () => {
  return (
    <View style={{ gap: 10, padding: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', margin: "auto"}}>Welcome to My Shop</Text>
      <ScrollView  horizontal>
        <Categories />
      </ScrollView>
      <ScrollView  vertical>
        <Items />
      </ScrollView>
    </View>
  )
}

export default Home