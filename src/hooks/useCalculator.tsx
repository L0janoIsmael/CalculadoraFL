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

    // 2. Borrado Inteligente (⌫)
    if (label === '⌫') {
      if (displayValue.endsWith('sin(') || displayValue.endsWith('cos(')) {
        setDisplayValue(displayValue.slice(0, -4));
        if (displayValue.length <= 4) setDisplayValue('0');
        return;
      }

      if (displayValue.length > 1) {
        setDisplayValue(displayValue.slice(0, -1));
      } else {
        setDisplayValue('0');
      }
      return;
    }

    // 3. Funciones Trigonométricas (sin, cos)
    if (label === 'sin' || label === 'cos') {
      const block = `${label}(`;
      if (displayValue === '0' || waitingForOperand) {
        setDisplayValue(block);
        setWaitingForOperand(false);
      } else {
        setDisplayValue(displayValue + block);
      }
      return;
    }

    // 4. Porcentaje (%)
    if (label === '%') {
      const current = parseFloat(displayValue);
      if (!isNaN(current)) {
        setDisplayValue(String(current / 100));
      }
      return;
    }

    // 5. Paréntesis ( )
    if (label === '( )') {
      const openCount = (displayValue.match(/\(/g) || []).length;
      const closeCount = (displayValue.match(/\)/g) || []).length;
      const parenthesisChar = openCount > closeCount ? ')' : '(';

      if (displayValue === '0' || waitingForOperand) {
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
      const parts = displayValue.split(/[\+\-\×\÷\(\)]/);
      const currentNumber = parts[parts.length - 1];
      if (!currentNumber.includes('.')) {
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

    // 8. Operadores (+, -, ×, ÷) -> Permite operadores múltiples y fluidos
    if (['+', '-', '×', '÷'].includes(label)) {
      if (expression.includes('=')) {
        setExpression(`${displayValue} ${label} `);
      } else if (waitingForOperand) {
        // Si presionas varios operadores seguidos, reemplaza el operador anterior por el nuevo
        const trimmed = expression.trim();
        if (['+', '-', '×', '÷'].includes(trimmed.slice(-1))) {
          setExpression(trimmed.slice(0, -1) + ` ${label} `);
        } else {
          setExpression(expression + ` ${label} `);
        }
      } else {
        setExpression(expression + displayValue + ` ${label} `);
      }

      setDisplayValue('0');
      setWaitingForOperand(false);
      return;
    }

    // 9. Botón de Igual (=)
    if (label === '=') {
      if (!expression && displayValue === '0') return;

      const fullExpressionString = expression + displayValue;
      
      try {
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