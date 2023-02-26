import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Icons(props) {
  return (
    <Ionicons
    name={props.name}
    size={props.size}
    color={props.color}
  />
  )
}
