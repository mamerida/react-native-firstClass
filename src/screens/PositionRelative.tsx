import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const PositionRelative = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada}/>
        <View style={styles.cajaNaranja}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#28C4D9',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    cajaMorada:{
        width:100,
        height:100,
        backgroundColor:'#5856D6',
        //si le coloco top o rigth va a ser relativo al padre
    },
    cajaNaranja:{
        width:100,
        height:100,
        backgroundColor:'#F0A23B'
    }
})