import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import CalculadoraDosesScreen from './src/components/Calculadora'


export default class App extends Component {
   
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>
                    Calculadora de Anestésicos Roedores
                </Text>
                <CalculadoraDosesScreen style={styles.board}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    titulo: {
        padding: 16,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'grey',
    },
});