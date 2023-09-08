import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

//creo una interface para poder recibir props 

interface Props {
    title: string,
    onPress: () => void,
    position?: 'br' | 'bl'
}

export const Fab = ({title, onPress, position = "br"} : Props) => {
  return (
    <TouchableOpacity
        style={[
            style.fabLocation,
            (position === 'bl' ? style.left : style.rigth)
        ]}
        onPress={onPress}
    >
        <View style={style.fab}>
        <Text style={style.fabText}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
    fabLocation: {
        position: 'absolute', //toma el ancho del padre (en este caos toda la pantalla)
        bottom: 50, // segun el ancho del padre lo toma y lo coloca en el button
      },
      rigth :{
        right : 50
      },
      left :{
        left : 50
      }, 
      fab: {
        backgroundColor: '#5856D6',
        width:60,
        height:60,
        borderRadius:100,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
      },
      fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf:'center'
      },
    //   fabLocationL :{
    //     position: 'absolute', //toma el ancho del padre (en este caos toda la pantalla)
    //     bottom: 50, // segun el ancho del padre lo toma y lo coloca en el button
    //     left: 50
    //   },
})