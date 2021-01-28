import * as React from 'react';
import { ActivityIndicator, Button, View, StyleSheet } from 'react-native';

interface ButtonProps {
  loading?: boolean;
}


const LoadingButton = (props: ButtonProps) => {
  const { loading } = props;

  return (
    <View style={styles.container}>
      <Button title="Loading Button !!!" disabled={loading} onPress={() => {}} />
      {loading && <ActivityIndicator style={styles.indicator} animating color="#999999"/>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
  },
  indicator: {
    position: 'absolute',
    opacity: 1,
    top: 8,
    right: 8,
  },
});

export default LoadingButton;
