import React from 'react'
import { Platform } from 'react-native'
import { View, StyleSheet, Text, Dimensions } from 'react-native'

const GridLayoutScreen = () => {
  return (
    <View style={styles.container}>
      {Array.from({ length: 12 }).map((_, index) => (
        <View key={index} style={styles.box}>
          <Text style={styles.text}>{index + 1}</Text>
        </View>
      ))}
    </View>
  )
}

const getColor = (i) => {
  const colors = ['red', 'green', 'blue', 'orange', 'purple', 'teal']
  return colors[i % colors.length]
}

const screenWidth = Dimensions.get('window').width
const boxSize = (screenWidth - 60) / 3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  box: {
    width: boxSize,
    height: boxSize,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    ...Platform.select({
      ios: { backgroundColor: 'pink' },
      android: { backgroundColor: 'lightblue' },
    }),
  },
  
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
})

export default GridLayoutScreen
