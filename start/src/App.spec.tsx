import { describe, expect, test } from 'vitest';
import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('Deve testar o fluxo de progresso no preenchimento do formulário', () => {
    const result = render(<App />)
 
      // Step 1
      expect(result.getByTestId('span-progress').textContent).toBe('0%');
      expect(result.getByTestId('span-step').textContent).toBe('1')
      fireEvent.click(result.getByDisplayValue('administrator'));
      expect(result.getByTestId('span-progress').textContent).toBe('30%');
      fireEvent.click(result.getByTestId('button-next'));

      // Step 2
      expect(result.getByTestId('span-step').textContent).toBe('2');
      fireEvent.input(result.getByPlaceholderText('Informe seu nome'), { target: { value: 'Lucas Medeiros'} })
      expect(result.getByTestId('span-progress').textContent).toBe('45%');
      fireEvent.input(result.getByPlaceholderText('Informe seu CPF'), { target: { value: '00011122233'} });
      expect(result.getByTestId('span-progress').textContent).toBe('60%');
      fireEvent.input(result.getByPlaceholderText('Informe seu cargo'), { target: { value: 'Programador'} });
      expect(result.getByTestId('span-progress').textContent).toBe('75%');
      fireEvent.click(result.getByTestId('button-next'));

     // Step 2
      expect(result.getByTestId('span-step').textContent).toBe('3');
      fireEvent.input(result.getByPlaceholderText('Informe seu e-mail'), { target: { value: 'lucas@loremipsum.com'} })
      expect(result.getByTestId('span-progress').textContent).toBe('85%');
      fireEvent.input(result.getByPlaceholderText('Informe sua senha'), { target: { value: 'senha1234'} })
      expect(result.getByTestId('span-progress').textContent).toBe('95%');
      fireEvent.input(result.getByPlaceholderText('Repita sua senha'), { target: { value: 'senha1234'} })
      expect(result.getByTestId('span-progress').textContent).toBe('100%');
  });
});
