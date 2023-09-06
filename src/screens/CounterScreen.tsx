import React, { useState } from "react";
import {StyleSheet, Text, TouchableOpacity, View } from "react-native";


const CounterScreen =  () => {
    const [counter, setCounter] = useState(0)
    return(
        <View style={style.container}>
            <Text style={style.title}>
              Contador {counter}
            </Text>
            {/* <Button
              title="click"
              onPress={()=>setCounter(counter + 1)}            
            /> */}
            <TouchableOpacity
              style={style.fabLocationR}
              onPress={ () => setCounter(counter + 1 )}
            >
              <View style={style.fab}>
                <Text style={style.fabText}>+1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.fabLocationL}
              onPress={ () => setCounter(counter - 1 )}
            >
              <View style={style.fab}>
                <Text style={style.fabText}>-1</Text>
              </View>
            </TouchableOpacity>
        </View>
      )
}

export default CounterScreen

const style = StyleSheet.create({
  container: {
    flex: 1 ,  //le indica al ponerle 1 que tome todo el espacio disponible
    justifyContent: 'center'
  },
  title: {
    fontSize:55,
    textAlign:"center",
    top:-15
  },
  fabLocationR: {
    position: 'absolute', //toma el ancho del padre (en este caos toda la pantalla)
    bottom: 50, // segun el ancho del padre lo toma y lo coloca en el button
    right: 50
  },
  fabLocationL :{
    position: 'absolute', //toma el ancho del padre (en este caos toda la pantalla)
    bottom: 50, // segun el ancho del padre lo toma y lo coloca en el button
    left: 50
  },
  fab: {
    backgroundColor: '#5856D6',
    width:60,
    height:60,
    borderRadius:100,
    justifyContent:'center'
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf:'center'
  }
})