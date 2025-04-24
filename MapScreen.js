import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker, Polygon } from 'react-native-maps';

export default function MapScreen() {
  const [region, setRegion] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      // Запит дозволу
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Доступ до геолокації заборонено');
        return;
      }
      // Отримання позиції
      let loc = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  if (errorMsg) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{errorMsg}</Text>
      </View>
    );
  }

  if (!region) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Масив координат для полігону (Пример: невеликий квадрат навколо поточного місця)
  const polygonCoords = [
    { latitude: region.latitude + 0.002, longitude: region.longitude - 0.002 },
    { latitude: region.latitude + 0.002, longitude: region.longitude + 0.002 },
    { latitude: region.latitude - 0.002, longitude: region.longitude + 0.002 },
    { latitude: region.latitude - 0.002, longitude: region.longitude - 0.002 },
  ];

  return (
    <MapView
      style={styles.map}
      region={region}
      showsUserLocation
      followsUserLocation
    >
      {/* Додатковий маркер */}
      <Marker
        coordinate={{ latitude: region.latitude, longitude: region.longitude }}
        title="Ви тут"
      />

      {/* Полігон навколо */}
      <Polygon
        coordinates={polygonCoords}
        strokeColor="#FF0000"
        fillColor="rgba(255,0,0,0.2)"
        strokeWidth={2}
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: { flex: 1 },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 18,
    color: '#e74c3c',
  },
});
