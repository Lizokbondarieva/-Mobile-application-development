import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Button } from 'react-native';
import ItemList from './ItemList';
import LocationScreen from './LocationScreen';
import MapScreen from './MapScreen';
import UserInputScreen from './UserInputScreen';
import SwitchScreen from './SwitchScreen';
import PickerScreen from './PickerScreen';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('list');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <Button
          title="Список"
          onPress={() => setActiveScreen('list')}
          color={activeScreen === 'list' ? '#3498db' : '#95a5a6'}
        />
        <Button
          title="Геолокація"
          onPress={() => setActiveScreen('location')}
          color={activeScreen === 'location' ? '#3498db' : '#95a5a6'}
        />
        <Button
          title="Карта"
          onPress={() => setActiveScreen('map')}
          color={activeScreen === 'map' ? '#3498db' : '#95a5a6'}
        />
        <Button
          title="Ввід"
          onPress={() => setActiveScreen('input')}
          color={activeScreen === 'input' ? '#3498db' : '#95a5a6'}
        />
        <Button
          title="Перемикачі"
          onPress={() => setActiveScreen('switch')}
          color={activeScreen === 'switch' ? '#3498db' : '#95a5a6'}
        />
        <Button
          title="Селектор"
          onPress={() => setActiveScreen('picker')}
          color={activeScreen === 'picker' ? '#3498db' : '#95a5a6'}
        />
      </View>

      {activeScreen === 'list' && <ItemList />}
      {activeScreen === 'location' && <LocationScreen />}
      {activeScreen === 'map' && <MapScreen />}
      {activeScreen === 'input' && <UserInputScreen />}
      {activeScreen === 'switch' && <SwitchScreen />}
      {activeScreen === 'picker' && <PickerScreen />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  nav: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});
