import { View, Text, TouchableOpacity, Button } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import { getAllCategories } from '../api/category'
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
  const CategoryItem = ({item})=>{
    return (
        <TouchableOpacity style={{color: "#000"}}>
            
            <Text style={{
                color: '#000',
                backgroundColor: 'rgba(128, 128, 128, 0.2)',
                padding: 8,
                paddingHorizontal: 20,
                borderRadius: 50
            }}>{item.name}</Text>
        </TouchableOpacity>
    )
  }
  if(isPending) return <Text>Loading...</Text>

    return (
    <View style={{flexDirection: 'row', gap: 5}}>
        
      {data?.map(category=> <CategoryItem key={category.id} item={category} />)}
    </View>
  )
}

export default Categories