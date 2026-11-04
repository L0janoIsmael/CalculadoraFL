import { useState } from 'react';

export const useCalculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [expression, setExpression] = useState('');
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handlePress = (label: string) => {
    // 1. Borrado Total (AC)
    if (label === 'AC') {
      setDisplayValue('0');
      setExpression('');
      setWaitingForOperand(false);
      return;
    }

    // 2. Retroceso (⌫)
    if (label === '⌫') {
      if (displayValue.length > 1) {
        setDisplayValue(displayValue.slice(0, -1));
      } else {
        setDisplayValue('0');
      }
      return;
    }

    // 3. Funciones Trigonométricas (sin, cos) -> Envuelven el valor actual limpiamente
    if (label === 'sin' || label === 'cos') {
      const cleanExpr = expression.includes('=') ? '' : expression;
      setExpression(cleanExpr);
      setDisplayValue(`${label}(${displayValue})`);
      setWaitingForOperand(false);
      return;
    }

    // 4. Porcentaje (%)
    if (label === '%') {
      const current = parseFloat(displayValue);
      setDisplayValue(String(current / 100));
      return;
    }

    // 5. Paréntesis ( )
    if (label === '( )') {
      const fullString = expression + displayValue;
      const openCount = (fullString.match(/\(/g) || []).length;
      const closeCount = (fullString.match(/\)/g) || []).length;
      const parenthesisChar = openCount > closeCount ? ')' : '(';

      if (waitingForOperand || displayValue === '0') {
        setDisplayValue(parenthesisChar);
        setWaitingForOperand(false);
      } else {
        setDisplayValue(displayValue + parenthesisChar);
      }
      return;
    }

    // 6. Punto Decimal (.)
    if (label === '.') {
      if (waitingForOperand) {
        setDisplayValue('0.');
        setWaitingForOperand(false);
        return;
      }
      if (!displayValue.includes('.')) {
        setDisplayValue(displayValue + '.');
      }
      return;
    }

    // 7. Números (0 al 9)
    if (!isNaN(Number(label))) {
      if (displayValue === '0' || waitingForOperand) {
        setDisplayValue(label);
        setWaitingForOperand(false);
      } else {
        setDisplayValue(displayValue + label);
      }
      return;
    }

    // 8. Operadores (+, -, ×, ÷)
    if (['+', '-', '×', '÷'].includes(label)) {
      if (expression.includes('=')) {
        setExpression(`${displayValue} ${label} `);
      } else if (waitingForOperand) {
        const trimmed = expression.trim();
        if (['+', '-', '×', '÷'].includes(trimmed.slice(-1))) {
          setExpression(trimmed.slice(0, -1) + ` ${label} `);
        }
      } else {
        setExpression(expression + displayValue + ` ${label} `);
      }

      setWaitingForOperand(true);
      return;
    }

    // 9. Botón de Igual (=)
    if (label === '=') {
      if (!expression && displayValue === '0') return;

      const fullExpressionString = expression + displayValue;
      
      try {
        // Traducción robusta para JavaScript (convierte grados a radianes para que Math.sin/cos funcione bien)
        const sanitizedExpr = fullExpressionString
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/sin\(/g, 'Math.sin((Math.PI/180)*')
          .replace(/cos\(/g, 'Math.cos((Math.PI/180)*');

        const result = Function(`'use strict'; return (${sanitizedExpr})`)();
        
        if (isNaN(result) || !isFinite(result)) {
          throw new Error('Invalid calculation');
        }

        const formattedResult = Number(result.toFixed(8)).toString();

        setExpression(`${fullExpressionString} =`);
        setDisplayValue(formattedResult);
        setWaitingForOperand(true);
      } catch (error) {
        setDisplayValue('Error');
        setExpression('');
      }
      return;
    }
  };

  return {
    displayValue,
    expression,
    handlePress,
  };
};