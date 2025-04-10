import React, { useLayoutEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';

export default function DetailsScreen() {
  const { itemId, title } = useLocalSearchParams();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title || 'Details Page',
      headerRight: () => (
        <Text
          onPress={() => Alert.alert('More info')}
          style={{ marginRight: 10, color: 'blue' }}>
          Info
        </Text>
      ),
    });
  }, [navigation, title]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>📄 Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>Title: {title}</Text>
    </View>
  );
}
