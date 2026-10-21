import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Boton from '../components/Boton';
import Display from '../components/Display';

export default function Index() {
  // Inicializamos sin el ejercicio de ejemplo
  const [formula, setFormula] = useState('');
  const [resultado, setResultado] = useState('0');

  // Colores de la calculadora
  const GREEN = '#65D30B';
  const GREEN_ACCENT = '#50A808';
  const GRAY_DARK = '#282B28';
  const GRAY_LIGHT = '#4A4D4A';

  return (
    <View style={styles.container}>
      <Display formula={formula} resultado={resultado} />

      <View style={styles.grid}>
        {/* Fila 1 */}
        <View style={styles.row}>
          <Boton label="%" bgColor={GRAY_DARK} onPress={() => {}} />
          <Boton label="( )" bgColor={GRAY_DARK} onPress={() => {}} />
          <Boton label="sin" bgColor={GRAY_DARK} onPress={() => {}} />
          <Boton label="log" bgColor={GRAY_DARK} onPress={() => {}} />
        </View>

        {/* Fila 2 */}
        <View style={styles.row}>
          <Boton label="AC" bgColor={GRAY_LIGHT} onPress={() => {}} />
          <Boton label="⌫" bgColor={GRAY_LIGHT} onPress={() => {}} />
          <Boton label="∫" bgColor={GREEN} textColor="#000" onPress={() => {}} />
          <Boton label="÷" bgColor={GREEN} textColor="#000" onPress={() => {}} />
        </View>

        {/* Fila 3 */}
        <View style={styles.row}>
          <Boton label="7" bgColor={GRAY_DARK} onPress={() => {}} />
          <Boton label="8" bgColor={GRAY_DARK} onPress={() => {}} />
          <Boton label="9" bgColor={GRAY_DARK} onPress={() => {}} />
          <Boton label="×" bgColor={GREEN} textColor="#000" onPress={() => {}} />
        </View>

        {/* Fila 4 */}
        <View style={styles.row}>
          <Boton label="4" bgColor={GRAY_DARK} onPress={() => {}} />
          <Boton label="5" bgColor={GRAY_DARK} onPress={() => {}} />
          <Boton label="6" bgColor={GRAY_DARK} onPress={() => {}} />
          <Boton label="-" bgColor={GREEN} textColor="#000" onPress={() => {}} />
        </View>

        {/* Fila 5: 1, 2, 3 y el botón + (alto) */}
        <View style={styles.row}>
          <Boton label="1" bgColor={GRAY_DARK} onPress={() => {}} />
          <Boton label="2" bgColor={GRAY_DARK} onPress={() => {}} />
          <Boton label="3" bgColor={GRAY_DARK} onPress={() => {}} />
          <Boton label="+" isDoubleHeight bgColor={GREEN} textColor="#000" onPress={() => {}} />
        </View>

        {/* Fila 6: 0 (ancho), . y el botón = (alineado a la derecha) */}
        <View style={styles.rowWithOverlap}>
          <Boton label="0" isDoubleWidth bgColor={GRAY_DARK} onPress={() => {}} />
          <Boton label="." bgColor={GRAY_DARK} onPress={() => {}} />
          <Boton label="=" bgColor={GREEN_ACCENT} textColor="#000" onPress={() => {}} />
        </View>
      </View>
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
  grid: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rowWithOverlap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -77, // Sube la última fila para encajar debajo del botón '+' de doble altura
  },
});