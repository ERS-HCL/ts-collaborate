import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { toSlug } from '@thefakeorg/utils';
import Counter from './src/components/Counter';
import { LoadingButton } from '@thefakeorg/react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>{`Using shared lib for generating slug: ${toSlug(
        'hello world'
      )}`}</Text>
      <Counter />
      <View style={styles.btnContainer}>
        <LoadingButton loading />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    padding: 2,
    margin: 2,
  },
});
