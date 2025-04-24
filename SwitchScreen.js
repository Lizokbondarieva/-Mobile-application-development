import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function SwitchScreen() {
  const [airplaneMode, setAirplaneMode] = useState(false);
  const [wifiOn, setWifiOn] = useState(false);

  const toggleAirplane = (value) => {
    setAirplaneMode(value);
    if (value) {
      setWifiOn(false);
    }
  };

  const toggleWifi = (value) => {
    setWifiOn(value);
    if (value) {
      setAirplaneMode(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Airplane Mode</Text>
        <Switch
          value={airplaneMode}
          onValueChange={toggleAirplane}
          disabled={wifiOn}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Wi-Fi</Text>
        <Switch
          value={wifiOn}
          onValueChange={toggleWifi}
          disabled={airplaneMode}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
});
