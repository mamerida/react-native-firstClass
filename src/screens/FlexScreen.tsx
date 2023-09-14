import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"#28C4D9"
    },
    //si yo a las cajas les coloco flex 1 a cada una se van a repartir el 
    //espacio de manera equitativa.
    // al colocar los nuevos del flex le indico practicamente el porcentaje de 
    //pantalla que quiero que ocupe ese componente
    caja1:{
        // flex:2,
        borderWidth:2,
        borderColor:'white',
        fontSize:30
    },
    caja2:{
        // flex:2,
        borderWidth:2,
        borderColor:'white',
        fontSize:30
    },
    caja3:{
        // flex:1,
        borderWidth:2,
        borderColor:'white',
        fontSize:30
    }
})