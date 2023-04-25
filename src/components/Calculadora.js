import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, StyleSheet } from 'react-native';

const Calculadora = () => {
  const [peso, setPeso] = useState('');
  const [volume, setVolume] = useState('');

  const calcularDose = () => {
    // Realiza o cálculo da dose
    const doseIndicada = 10; // Dose indicada do medicamento
    const concentracao = 5; // Concentração do medicamento
    const resultado = (doseIndicada * peso) / concentracao;

    setVolume(resultado.toFixed(2)); // Atualiza o estado do volume com o resultado do cálculo
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Peso do Paciente (Kg):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={peso}
        onChangeText={(text) => setPeso(text)}
      />
      <Button title="Calcular" onPress={calcularDose} />
      {volume !== '' && (
        <Text style={styles.result}>Volume do Medicamento: {volume} mL</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  result: {
    fontSize: 16,
    marginTop: 16,
  },
});

export default Calculadora;