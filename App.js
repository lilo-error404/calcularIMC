'use client';
import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';

export default function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const calcularIMC = () => {
    const alturaFloat = parseFloat(altura);
    const pesoFloat = parseFloat(peso);

    if (!alturaFloat || !pesoFloat || alturaFloat <= 0 || pesoFloat <= 0) {
      setMensagem('Por favor, insira valores válidos.');
      setImc(null);
      return;
    }

    const resultado = pesoFloat / (alturaFloat * alturaFloat);
    setImc(resultado.toFixed(2));

    // Mensagem opcional com base no resultado
    if (resultado < 18.5) {
      setMensagem('Abaixo do peso');
    } else if (resultado < 24.9) {
      setMensagem('Peso normal');
    } else if (resultado < 29.9) {
      setMensagem('Sobrepeso');
    } else {
      setMensagem('Obesidade');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <TextInput
        style={styles.inputs}
        placeholder='Sua Altura (ex: 1.75)'
        value={altura}
        onChangeText={setAltura}
        keyboardType='numeric'
      />

      <TextInput
        style={styles.inputs}
        placeholder='Seu Peso (ex: 70.5)'
        value={peso}
        onChangeText={setPeso}
        keyboardType='numeric'
      />

      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>

      {imc && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Seu IMC é: {imc}</Text>
          <Text style={styles.resultText}>{mensagem}</Text>
        </View>
      )}
    </View>
  );
}