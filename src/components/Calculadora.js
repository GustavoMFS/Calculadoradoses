import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import {medicamentos, reversores} from '../dados/dadosMedicamentos';

const CalculadoraDosesScreen = () => {
  const [pesoPaciente, setPesoPaciente] = useState('');
  const [resultados, setResultados] = useState([]);


  // Função para calcular o volume de medicamento com base no peso do paciente
  const calcularVolumeMedicamento = (nomeMedicamento, doseIndicada, concentracao) => {
    const volume = (doseIndicada * pesoPaciente) / concentracao;
    return volume.toFixed(3);
  };

  // Função para lidar com o pressionamento do botão de cálculo
  const handleCalcular = () => {
    // Cálculos para cada medicamento
    const resultadosCalculados = medicamentos.map(med => ({
      nome: med.nome,
      volume: calcularVolumeMedicamento(med.nome, med.doseIndicada, med.concentracao),
    }));
    setResultados(resultadosCalculados);

  // const resultadosReversores = reversores.map(med => ({
  //     nome: med.nomeReversor,
  //     volume: calcularVolumeMedicamento(med.nomeReversor, med.doseIndicada, med.concentracao),
  //   }));
  //   setResultados(resultadosReversores);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Insira o peso do paciente"
        value={pesoPaciente}
        onChangeText={setPesoPaciente}
      />
      <Button 
        title="Calcular" 
        onPress={handleCalcular} 
        color='#330066'/>
      <FlatList
        data={resultados}
        renderItem={({ item }) => (
          <View style={styles.resultadoItem}>
            <Text style={styles.resultadoNome}>{item.nome}</Text>
            <Text style={styles.resultadoVolume}>Volume: {item.volume} ml</Text>
          </View>
        )}
        keyExtractor={item => item.nome}
      />
      {/* <FlatList
        data={resultados}
        renderItem={({ item }) => (
          <View style={styles.resultadoItem}>
            <Text style={styles.resultadoNome}>{item.nomeReversor}</Text>
            <Text style={styles.resultadoVolume}>Volume: {item.volume} ml</Text>
          </View>
        )}
        keyExtractor={item => item.nomeReversor}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: 'grey',
    color: 'white'
  },
  resultadoItem: {
    marginBottom: 8,
  },
  resultadoNome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'grey',
  },
  resultadoVolume: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
});

export default CalculadoraDosesScreen;
