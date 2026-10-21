import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface DisplayProps {
  formula: string;
  resultado: string;
}

const Display: React.FC<DisplayProps> = ({ formula, resultado }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.formulaText} numberOfLines={1}>
        {formula}
      </Text>
      <Text style={styles.resultText} numberOfLines={1}>
        {resultado}
      </Text>
    </View>
  );
};

export default Display;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    minHeight: 160,
  },
  formulaText: {
    color: '#8A8A8E',
    fontSize: 24,
    marginBottom: 8,
  },
  resultText: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: 'bold',
  },
});