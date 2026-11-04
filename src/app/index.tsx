import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Regilla from '@/components/Regilla';
import { useCalculator } from '@/hooks/useCalculator';

export default function HomeScreen() {
  const { displayValue, expression, handlePress } = useCalculator();

  return (
    <View style={styles.container}>
      {/* Visor de la calculadora con alineación inversa estricta contra saltos */}
      <View style={styles.displayContainer}>
        
        <View style={styles.rowWrapper}>
          <Text 
            style={styles.expressionText} 
            numberOfLines={1} 
            ellipsizeMode="head"
          >
            {expression}
          </Text>
        </View>

        <View style={styles.rowWrapper}>
          <Text 
            style={styles.displayText} 
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.5}
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
    paddingBottom: 20,
  },
  displayContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    minHeight: 140,
    justifyContent: 'flex-end',
    width: '100%',
  },
  rowWrapper: {
    width: '100%',
    flexDirection: 'row-reverse', // Fuerza el crecimiento del texto de derecha a izquierda
    alignItems: 'center',
    overflow: 'hidden',
    marginVertical: 2,
  },
  expressionText: {
    color: '#8E8E93',
    fontSize: 20,
    textAlign: 'right',
  },
  displayText: {
    color: '#fff',
    fontSize: 60,
    fontWeight: '300',
    textAlign: 'right',
  },
});