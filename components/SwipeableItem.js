import React, { useRef } from 'react';
import { ScrollView, View, Text, StyleSheet, Animated } from 'react-native';

export default function SwipeableItem({ text, onSwipe }) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const width = 300; // за потреби підлаштуйте

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  scrollX.addListener(({ value }) => {
    if (value > width / 2) {
      onSwipe();
    }
  });

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={handleScroll}
      contentContainerStyle={styles.scrollContainer}
    >
      <View style={[styles.item, { width }]}>
        <Text>{text}</Text>
      </View>
      <View style={{ width }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { alignItems: 'center' },
  item: { padding: 20, backgroundColor: '#eef', marginVertical: 5, borderRadius: 6 }
});
