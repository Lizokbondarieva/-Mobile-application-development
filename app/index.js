import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

export default function HomeScreen() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Layout</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/row')}>
        <Text style={styles.buttonText}>Row Layout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/column')}>
        <Text style={styles.buttonText}>Column Layout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/grid')}>
        <Text style={styles.buttonText}>Grid Layout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
})
