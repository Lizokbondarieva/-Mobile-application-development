import React, { useCallback, useState } from 'react';
import { View, Text, ScrollView, RefreshControl, StyleSheet } from 'react-native';

export default function ScrollExampleScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  }, []);

  const items = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      {items.map(item => (
        <View key={item} style={styles.item}>
          <Text>{item}</Text>
        </View>
      ))}
      <Text style={styles.next} onPress={() => navigation.navigate('SwipeList')}>
        → До Swipe List
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 20 },
  item: { width: '100%', padding: 20, backgroundColor: '#fafafa', marginVertical: 5, borderRadius: 6 },
  next: { marginTop: 20, color: 'blue' }
});
