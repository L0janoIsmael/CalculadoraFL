import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface BotonProps {
  label: string;
  onPress: () => void;
  bgColor?: string;
  textColor?: string;
  isDoubleWidth?: boolean;
}

const Boton: React.FC<BotonProps> = ({
  label,
  onPress,
  bgColor = '#282B28',
  textColor = '#FFF',
  isDoubleWidth = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: bgColor },
        isDoubleWidth && styles.doubleWidth,
      ]}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Boton;

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: '22%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    marginVertical: 6,
  },
  doubleWidth: {
    width: '48%',
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  text: {
    fontSize: 26,
    fontWeight: '500',
  },
});