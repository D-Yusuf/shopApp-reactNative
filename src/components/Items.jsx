import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllItems } from '../api/item'
import {useNavigation} from '@react-navigation/native'
const Items = () => {
    const navigation = useNavigation()
    const {data, isPending} = useQuery({
        queryKey: ['items'],
        queryFn: getAllItems
    })
    function Item({item, index}){
        // make get ownner function later
    
        return (
            <TouchableOpacity onPress={()=> navigation.navigate('Product Detail', {item})} style={{ width: '45%', alignItems: 'center', ...(index%2 === 1 ? { marginTop: 20 } : {})}}>
                <View style={{flex: 2, position: 'relative', flexDirection: 'row', height: 150, width: 150}}>
                    <Image 
                        source={{uri: "https://react-native-mini-project-items.eapi.joincoded.com/" + item.image || "https://via.placeholder.com/150"}} 
                        style={{
                            width: 150, 
                            height: "100%", 
                            borderRadius: 10,
                            
                        }} 
                    />
                    <View style={{position: 'absolute', bottom: 5, left: 5, backgroundColor: 'green', padding: 5, borderRadius: 5}}>
                        <Text style={{fontSize: 8, color: 'white'}}>${item.price}</Text>
                    </View>
                </View>
                <Text style={{flex: 1, fontSize: 12, fontWeight: 'bold'}}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
  return (
    <View>

        <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>Products</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 5, justifyContent: 'center'}}>
        {data?.map((item, index)=> <Item key={item.id} item={item} index={index} />)}
        </View>
    </View>
  )
}

export default Items