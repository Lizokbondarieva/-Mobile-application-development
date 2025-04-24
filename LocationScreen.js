import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

export default function LocationScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // Запит дозволу
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Доступ до геолокації заборонено');
        setLoading(false);
        return;
      }

      // Отримання поточної позиції
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {errorMsg ? (
        <Text style={styles.errorText}>{errorMsg}</Text>
      ) : (
        <>
          <Text style={styles.label}>Широта:</Text>
          <Text style={styles.value}>{location.latitude}</Text>
          <Text style={styles.label}>Довгота:</Text>
          <Text style={styles.value}>{location.longitude}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff'
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 8
  },
  value: {
    fontSize: 20,
    color: '#333',
    marginBottom: 4
  },
  errorText: {
    fontSize: 18,
    color: '#e74c3c'
  }
});
