import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllItems } from '../api/item'
const Items = () => {
    const {data, isPending} = useQuery({
        queryKey: ['items'],
        queryFn: getAllItems
    })
    function Item({item}){
        // make get ownner function later
        return (
            <TouchableOpacity style={{borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 5, width: '45%', alignItems: 'center'}}>
                <View style={{position: 'relative', flexDirection: 'row', height: 150}}>
                    <Image source={{uri: "https://react-native-mini-project-items.eapi.joincoded.com/" + item.image || "https://via.placeholder.com/150"}} style={{width: '100%', height: 150, borderRadius: 10}} />
                    <View style={{position: 'absolute', top: 0, left: 0, backgroundColor: 'red', padding: 5, borderRadius: 5}}>
                        {/* <Image source={{uri: "https://react-native-mini-project-items.eapi.joincoded.com" + }} style={{width: 20, height: 20}} /> */}
                        <Text style={{color: 'white'}}>New</Text>
                    </View>
                </View>
                <Text style={{flex: 1, fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    console.log(data)
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 5, justifyContent: 'center'}}>
      {data?.map(item=> <Item key={item.id} item={item} />)}
    </View>
  )
}

export default Items