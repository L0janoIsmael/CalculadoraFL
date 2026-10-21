import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface BotonProps {
  label: string;
  bgColor?: string;
  textColor?: string;
  isDoubleHeight?: boolean;
  isDoubleWidth?: boolean;
  onPress: () => void;
}

const Boton: React.FC<BotonProps> = ({
  label,
  bgColor = '#2A2D2A', // Color oscuro por defecto
  textColor = '#FFFFFF',
  isDoubleHeight = false,
  isDoubleWidth = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.boton,
        { backgroundColor: bgColor },
        isDoubleWidth && styles.doubleWidth,
        isDoubleHeight && styles.doubleHeight,
      ]}
    >
      <Text style={[styles.texto, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Boton;

const styles = StyleSheet.create({
  boton: {
    width: 65,
    height: 65,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
  },
  doubleWidth: {
    width: 142, // Ocupa 2 columnas + el margen
  },
  doubleHeight: {
    height: 142, // Ocupa 2 filas + el margen
  },
  texto: {
    fontSize: 22,
    fontWeight: '500',
  },
});