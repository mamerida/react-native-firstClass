import React from 'react'
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'

// const { width, height} = Dimensions.get('window');
// con esta property puedo tomar el ancho y alto del window para 
// usarlo proximamente, es dinamico no cambia.

export const DimensionesScreen = () => {

     const {width, height} = useWindowDimensions()
    return (
        <View>
            <View style={style.container}>
                <View style={style.cajaMorada}/>
                <View style={style.cajaNaranja}/>
            </View>
            <Text style={style.title}> W: {width}, H: {height}</Text>
        </View>
  )
}


const style = StyleSheet.create({
    container : {
        width: "100%",
        height: 300,
        backgroundColor : "red"
    },
    cajaMorada: {
        backgroundColor : "#58566D",
        height : "50%", //en este caso para poder ver el color debo utilizar %
        width: "50%"    //por que de caso contrario no teine contenido y no se aplica
    },
    cajaNaranja: {
        backgroundColor : "#F0A23B"
    },
    title : {
        fontSize: 50,
        textAlign: 'center'
    }
})


// const style = StyleSheet.create({
//     container : {
//         width: "100%", // con esta config el hijo siempre toda la mitad del 
//         height: 300,  // del padre por uqe esta el 50% de 300
//         backgroundColor : "red"
//     },
//     cajaMorada: {
//         backgroundColor : "#58566D",
//         height : "50%", //en este caso para poder ver el color debo utilizar %
//         width: "50%"    //por que de caso contrario no teine contenido y no se aplica
//     },
//     cajaNaranja: {
//         backgroundColor : "#F0A23B"
//     }
// })