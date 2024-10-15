import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
const Register = () => {
    const navigation = useNavigation()
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: 1, width: '80%', justifyContent: 'center', alignItems: 'center', gap: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Register a new account</Text>
            <TextInput style={{borderWidth: 1, borderColor: '#000', padding: 5, borderRadius: 5, width: '100%'}} placeholder="Email" />
            <TextInput style={{borderWidth: 1, borderColor: '#000', padding: 5, borderRadius: 5, width: '100%'}} placeholder="Password" />
            <TouchableOpacity title="Register" onPress={()=>{}}
                style={{
                    backgroundColor: '#007bff',
                    padding: 5,
                    borderRadius: 5,
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                >
                <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>Register</Text>
            </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'start'}}>
            <Text style={{fontSize: 12}}>Already have an account? </Text>
            <TouchableOpacity style={{paddingHorizontal: 10}} onPress={()=>navigation.navigate('Login')}>
                <Text style={{color: '#007bff', fontSize: 12, fontWeight: 'bold', textDecorationLine: 'underline'}}>Login</Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
    )
}

export default Register
