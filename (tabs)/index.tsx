import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>🏠 Home Screen</Text>
      <Link
        href={{
          pathname: '/details',
          params: { itemId: 42, title: 'My Item from Home' }
        }}
      >
        Go to Details
      </Link>
    </View>
  );
}
