import { View, Text ,Image as RNImage} from 'react-native'
import React from 'react'

export default  LocalImage = (props) => {
  return (
    <View>
      <RNImage source={props.asset} style={[props.style, {width:props.width, height:props.height}]}/>
    </View>
  )
}