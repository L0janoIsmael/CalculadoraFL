import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';

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
  bgColor = '#282B28',
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
      <CustomText style={[styles.texto, { color: textColor }]}>
        {label}
      </CustomText>
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
    width: 142,
  },
  doubleHeight: {
    height: 142,
  },
  texto: {
    fontSize: 22,
    fontWeight: '500',
  },
});