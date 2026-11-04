import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

// Extendemos de TextProps para que acepte numberOfLines, onPress, etc.
interface CustomTextProps extends TextProps {
  children: React.ReactNode;
}

const CustomText: React.FC<CustomTextProps> = ({ children, style, ...props }) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    fontFamily: 'System',
  },
});