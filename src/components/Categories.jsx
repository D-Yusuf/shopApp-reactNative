import { View, Text, TouchableOpacity, Button } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import { getAllCategories } from '../api/category'
import { useState } from 'react'
const Categories = () => {
  const { data, isPending } = useQuery({
    queryKey: ['categories'], 
    queryFn: getAllCategories ,
    onSuccess: (data)=>{
      console.log(data)
    },
    onError: (error)=>{
      console.log(error)
    }
  })
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const CategoryItem = ({item, index})=>{
    const [isSelected, setIsSelected] = useState(false)
    // const randomColor = getRandomColor()
    const colors = ["#ff0000","#87CEEB"]
    const randomColor = index ? index%2 ==0 ? colors[0] : colors[1] : colors[0]
    return (
        <TouchableOpacity style={{color: "#000"}} onPress={()=>setIsSelected(!isSelected)}>
            <Text style={{
                color: isSelected ? 'white' : randomColor,
                backgroundColor: isSelected ? randomColor +90 : randomColor + '18', // '1A' for 10% opacity
                padding: 6,
                fontSize: 12,
  
                width: 100,
                borderRadius: 8,
                textAlign: 'center'
            }}>
                {item.name.toUpperCase()}
                {/* {item.name + item.name.split('')[item.name.length -1]} */}
            </Text>
        </TouchableOpacity>
    )
  }
  if(isPending) return <Text>Loading...</Text>

    return (
    <View style={{flexDirection: 'row', gap: 5}}>
        <CategoryItem item={{name: 'All'}} />
      {data?.map((category, index)=> <CategoryItem key={category.id} item={category} index={index+1}  />)}
    </View>
  )
}

export default Categories