import { View, Text, Image, TouchableOpacity, ScrollView, Clipboard } from 'react-native'
import React from 'react'

const ProductDetail = ({route}) => {
    const {_id, description, image, price, name} = route.params.item
    
    function copyToClipboard(value){
        Clipboard.setString(value);
        alert('Copied to clipboard');
    }
    return (
        <ScrollView style={{flex: 1}}>
            <Image 
                source={{uri: `https://react-native-mini-project-items.eapi.joincoded.com/${image}`}} 
                style={{width: '100%', height: 400}}
                resizeMode="cover"
            />

            <View style={{flex: 1, alignItems: 'center'}}>
                <View style={{
                    flex: 1, 
                    width: '100%',   
                    padding: 20,
                    paddingHorizontal: 40, 
                    paddingTop: 40, 
                    borderTopLeftRadius: 20, 
                    borderTopRightRadius: 20, 
                    backgroundColor: 'white', 
                    marginTop: -20, 
                    gap: 20
                }}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{name}</Text>
                    <View style={{flexDirection: 'column', alignItems: 'start'}}>
                        <Text style={{fontSize: 16,}}>Description</Text>
                        <Text style={{fontSize: 14, color: 'gray'}}>{description}</Text>
                    </View>
                    <TouchableOpacity onPress={() => copyToClipboard(_id)} style={{flexDirection: 'column', alignItems: 'start'}}>
                        <Text style={{fontSize: 16,}}>Product ID</Text>
                        <Text style={{fontSize: 14, color: 'gray'}}>{_id}</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'column', alignItems: 'start'}}>
                        <Text style={{fontSize: 16,}}>Price</Text>
                        <Text style={{fontSize: 14, color: 'gray'}}>${price}</Text>
                    </View>
                    <TouchableOpacity style={{backgroundColor: '#007AFF', padding: 10, borderRadius: 10}}>
                        <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default ProductDetail
