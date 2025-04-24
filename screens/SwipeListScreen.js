import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import SwipeableItem from '../components/SwipeableItem';

export default function SwipeListScreen() {
  const [items, setItems] = useState(
    Array.from({ length: 8 }, (_, i) => ({ id: `${i}`, text: `Swipe Me ${i + 1}` }))
  );

  const handleSwipe = id => {
    setItems(curr => curr.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SwipeableItem
            text={item.text}
            onSwipe={() => handleSwipe(item.id)}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
      {items.length === 0 && <Text style={styles.empty}>Список порожній</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  empty: { textAlign: 'center', marginTop: 50, fontSize: 18 }
});
