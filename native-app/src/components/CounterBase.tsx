import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface CounterBaseProps {
  onUp: () => {};
  onDown: () => {};
  count: number;
}
const CounterBase: React.FC<CounterBaseProps> = ({ onUp, onDown, count }) => {
  return (
    <View>
      <Button title="Up" onPress={onUp} />
      <Text style={styles.counter}>{count}</Text>
      <Button title="Down" onPress={onDown} />
    </View>
  );
};

const styles = StyleSheet.create({
  counter: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default CounterBase;
