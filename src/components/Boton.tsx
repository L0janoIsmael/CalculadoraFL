import React from 'react';
import { Text, StyleSheet, Pressable, Vibration } from 'react-native';

interface BotonProps {
  label: string;
  bgColor?: string;
  textColor?: string;
  isDoubleWidth?: boolean;
  onPress: () => void;
}

const Boton: React.FC<BotonProps> = ({
  label,
  bgColor = '#282B28',
  textColor = '#FFF',
  isDoubleWidth = false,
  onPress,
}) => {
  const handlePress = () => {
    // Vibración sutil de 40ms al tocar el botón
    Vibration.vibrate(40);
    onPress();
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: bgColor, opacity: pressed ? 0.7 : 1 },
        isDoubleWidth && styles.doubleWidth,
      ]}
    >
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </Pressable>
  );
};

export default Boton;

const styles = StyleSheet.create({
  button: {
    height: 70,
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  doubleWidth: {
    flex: 2.1,
  },
  text: {
    fontSize: 26,
    fontWeight: '600',
  },
});