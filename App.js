import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Calculadora from "./src/components/Calculadora"

// const initialState = {
//   displayValue: '0',
//   clearDisplay: false,
//   operation: null,
//   values: [0, 0],
//   current: 0,

// }

export default class App extends Component {
   
    render () {
        return (
            <View style={styles.container}>
                <Calculadora>

                </Calculadora>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    board: {
      alignItems: 'center',
      backgroundColor: '#AAA',
    },
});