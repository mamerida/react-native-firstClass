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
              onPress={ () => setCounter(counter + 1 )}
            >
              <View>
                <Text>+1</Text>
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
  }
})