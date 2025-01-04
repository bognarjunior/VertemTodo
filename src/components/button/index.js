import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'; 
export default function Button({title, ...rest}) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}