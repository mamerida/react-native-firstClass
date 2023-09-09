import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={style.container}>
        <Text style={style.title}>
            Box Object Model
        </Text>
    </View>
  )
}


const style = StyleSheet.create({
  container:{ //el contenedor se estira lo necesario para cubrir a los hijos
    //En este caso si le coloco flex 1 se va a estirar todo lo qeu el contenedor 
    //pueda
    backgroundColor : 'red'
  },
  title : {
    paddingHorizontal : 50,
    fontSize : 20,
  }
})