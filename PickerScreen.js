import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function PickerScreen() {
  const [selectedSize, setSelectedSize] = useState('M');
  // Висота селектора: на iOS показуємо колесо, на Android - стандартну висоту
  const pickerHeight = Platform.OS === 'ios' ? 150 : 50;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Оберіть розмір одягу:</Text>
      <View style={[styles.pickerWrapper, { height: pickerHeight }]}>        
        <Picker
          selectedValue={selectedSize}
          onValueChange={(itemValue) => setSelectedSize(itemValue)}
          style={[styles.picker, { height: pickerHeight }]}
        >
          <Picker.Item label="S" value="S" />
          <Picker.Item label="M" value="M" />
          <Picker.Item label="L" value="L" />
          <Picker.Item label="XL" value="XL" />
        </Picker>
      </View>
      <Text style={styles.selection}>Вибраний розмір: {selectedSize}</Text>
      <Text style={styles.hint}>
        {Platform.OS === 'ios'
          ? '(покрутіть колесо для вибору)'
          : '(натисніть на список для вибору)'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 12,
  },
  pickerWrapper: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    overflow: 'hidden',
  },
  picker: {
    width: '100%',
  },
  selection: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  hint: {
    fontSize: 14,
    color: '#888',
  },
});
