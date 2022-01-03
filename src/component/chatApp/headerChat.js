import React from 'react'
import { Text, View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
const Header = () => {
  return (
     <View style={[tw`flex flex-row items-center h-16 bg-green-900 `,{
   
    }]}>

   
     <View style={[tw`flex flex-row justify-between items-center h-16 p-2 w-full bg-green-900 `,{
      position: "absolute"
    }]}> 
   
   <Image 
          style={[tw`rounded-full -ml-2`,{
            width: 60,
            height: 60,
            resizeMode: 'contain'
          }]}
          source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/User-admin.svg/636px-User-admin.svg.png"}}/>
      <Text numberOfLines={1} style={[tw`px-3 text-lg text-white w-2/5`, {
      }]}>
       Admin
      </Text>
      

          </View>
           </View>

  )
}

export default Header