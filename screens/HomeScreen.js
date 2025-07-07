import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>❤️ Our Connection</Text>
      <Button title="Log Special Moment" onPress={() => navigation.navigate('LogMoment')} />
      <Button title="Speaking Cards" onPress={() => navigation.navigate('SpeakingCards')} />
    </View>
  );
}
