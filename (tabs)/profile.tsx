import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function ProfileTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>👤 Profile Tab Screen</Text>
      <Link href="/">Back to Home</Link>
    </View>
  );
}
