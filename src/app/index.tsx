import React from 'react';
import { StyleSheet, View } from 'react-native';
import Display from '../components/Display';
import Regilla from '../components/Regilla';
import { useCalculator } from '../hooks/useCalculator';

export default function Index() {
  const { formula, resultado, manejarPresion } = useCalculator();

  return (
    <View style={styles.container}>
      <Display formula={formula} resultado={resultado} />
      <Regilla onPressBoton={manejarPresion} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F110F',
    justifyContent: 'flex-end',
    paddingBottom: 24,
  },
});