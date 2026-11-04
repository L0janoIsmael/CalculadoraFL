import { useState } from 'react';
import { Vibration } from 'react-native';

export const useCalculator = () => {
  const [formula, setFormula] = useState('');
  const [resultado, setResultado] = useState('0');

  const manejarPresion = (label: string) => {
    Vibration.vibrate(40);

    if (label === 'AC') {
      setFormula('');
      setResultado('0');
      return;
    }

    if (label === '⌫') {
      setFormula((prev) => prev.slice(0, -1));
      return;
    }

    if (label === '=') {
      try {
        let evaluable = formula
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/%/g, '/100');

        const res = eval(evaluable);
        setResultado(res.toString());
      } catch (error) {
        setResultado('Error');
      }
      return;
    }

    if (label === '( )') {
      const abrirCount = (formula.match(/\(/g) || []).length;
      const cerrarCount = (formula.match(/\)/g) || []).length;
      const nuevoParentesis = abrirCount <= cerrarCount ? '(' : ')';
      setFormula((prev) => prev + nuevoParentesis);
      return;
    }

    if (label === 'sin') {
      setFormula((prev) => prev + 'Math.sin(');
      return;
    }

    if (label === 'cos') {
      setFormula((prev) => prev + 'Math.cos(');
      return;
    }

    // Concatenar caracteres normales
    setFormula((prev) => prev + label);
  };

  return {
    formula,
    resultado,
    manejarPresion,
  };
};