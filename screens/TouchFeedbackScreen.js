import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, Pressable, Alert, StyleSheet } from 'react-native';

export default function TouchFeedbackScreen({ navigation }) {
  const [pressState, setPressState] = useState('Default Text');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('TouchableOpacity Pressed')}>
        <Text style={styles.buttonText}>Opacity</Text>
      </TouchableOpacity>

      <TouchableHighlight style={styles.button} underlayColor="#ddd"
        onPress={() => Alert.alert('TouchableHighlight Pressed')}>
        <Text style={styles.buttonText}>Highlight</Text>
      </TouchableHighlight>

      <Pressable
        style={styles.button}
        onPressIn={() => setPressState('Pressed')}
        onLongPress={() => setPressState('Long Pressed')}
        onPressOut={() => setPressState('Default Text')}
      >
        <Text style={styles.buttonText}>{pressState}</Text>
      </Pressable>

      <View style={styles.nav}>
        <Text onPress={() => navigation.navigate('ScrollExample')}>→ До Scroll Example</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  button: { marginVertical: 10, padding: 15, backgroundColor: '#eee', borderRadius: 8 },
  buttonText: { fontSize: 16 },
  nav: { marginTop: 30 }
});
