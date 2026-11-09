import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Regilla from '@/components/Regilla';
import { useCalculator } from '@/hooks/useCalculator';

export default function HomeScreen() {
  const { displayValue, expression, handlePress } = useCalculator();

  return (
    <View style={styles.container}>
      {/* Visor más amplio y espacioso tras quitar la memoria */}
      <View style={styles.displayContainer}>
        <View style={styles.rowWrapper}>
          <Text style={styles.expressionText} numberOfLines={1} ellipsizeMode="head">
            {expression}
          </Text>
        </View>

        <View style={styles.rowWrapper}>
          <Text 
            style={styles.displayText} 
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.4}
          >
            {displayValue}
          </Text>
        </View>
      </View>

      <Regilla onPressBoton={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
    paddingBottom: 25,
  },
  displayContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    minHeight: 180, // Pantalla notablemente más alta y cómoda
    justifyContent: 'flex-end',
    width: '100%',
  },
  rowWrapper: {
    width: '100%',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    overflow: 'hidden',
    marginVertical: 4,
  },
  expressionText: {
    color: '#8E8E93',
    fontSize: 22,
    textAlign: 'right',
  },
  displayText: {
    color: '#fff',
    fontSize: 68, // Tamaño grande y limpio
    fontWeight: '300',
    textAlign: 'right',
  },
});