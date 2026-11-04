import React from 'react';
import { StyleSheet, View } from 'react-native';
import Boton from './Boton';

interface RegillaProps {
  onPressBoton: (label: string) => void;
}

const Regilla: React.FC<RegillaProps> = ({ onPressBoton }) => {
  const GREEN = '#65D30B';
  const GREEN_ACCENT = '#50A808';
  const GRAY_DARK = '#282B28';
  const GRAY_LIGHT = '#4A4D4A';

  return (
    <View style={styles.grid}>
      {/* Fila 1 */}
      <View style={styles.row}>
        <Boton label="%" bgColor={GRAY_DARK} onPress={() => onPressBoton('%')} />
        <Boton label="( )" bgColor={GRAY_DARK} onPress={() => onPressBoton('( )')} />
        <Boton label="sin" bgColor={GRAY_DARK} onPress={() => onPressBoton('sin')} />
        <Boton label="⌫" bgColor={GRAY_LIGHT} onPress={() => onPressBoton('⌫')} />
      </View>

      {/* Fila 2: 'cos' ahora va de gris oscuro (no verde) */}
      <View style={styles.row}>
        <Boton label="AC" bgColor={GRAY_LIGHT} onPress={() => onPressBoton('AC')} />
        <Boton label="." bgColor={GRAY_DARK} onPress={() => onPressBoton('.')} />
        <Boton label="cos" bgColor={GRAY_DARK} onPress={() => onPressBoton('cos')} />
        <Boton label="÷" bgColor={GREEN} textColor="#000" onPress={() => onPressBoton('÷')} />
      </View>

      {/* Fila 3 */}
      <View style={styles.row}>
        <Boton label="7" bgColor={GRAY_DARK} onPress={() => onPressBoton('7')} />
        <Boton label="8" bgColor={GRAY_DARK} onPress={() => onPressBoton('8')} />
        <Boton label="9" bgColor={GRAY_DARK} onPress={() => onPressBoton('9')} />
        <Boton label="×" bgColor={GREEN} textColor="#000" onPress={() => onPressBoton('×')} />
      </View>

      {/* Fila 4 */}
      <View style={styles.row}>
        <Boton label="4" bgColor={GRAY_DARK} onPress={() => onPressBoton('4')} />
        <Boton label="5" bgColor={GRAY_DARK} onPress={() => onPressBoton('5')} />
        <Boton label="6" bgColor={GRAY_DARK} onPress={() => onPressBoton('6')} />
        <Boton label="-" bgColor={GREEN} textColor="#000" onPress={() => onPressBoton('-')} />
      </View>

      {/* Fila 5: Números 1, 2, 3 */}
      <View style={styles.row}>
        <Boton label="1" bgColor={GRAY_DARK} onPress={() => onPressBoton('1')} />
        <Boton label="2" bgColor={GRAY_DARK} onPress={() => onPressBoton('2')} />
        <Boton label="3" bgColor={GRAY_DARK} onPress={() => onPressBoton('3')} />
        <Boton label="+" bgColor={GREEN} textColor="#000" onPress={() => onPressBoton('+')} />
      </View>

      {/* Fila 6: El '0' doble ancho y el '=' ubicado exactamente a su derecha */}
      <View style={styles.row}>
        <Boton label="0" isDoubleWidth bgColor={GRAY_DARK} onPress={() => onPressBoton('0')} />
        <Boton label="=" bgColor={GREEN_ACCENT} textColor="#000" onPress={() => onPressBoton('=')} />
      </View>
    </View>
  );
};

export default Regilla;

const styles = StyleSheet.create({
  grid: {
    alignItems: 'center',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});