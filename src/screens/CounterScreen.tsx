import React, { useState } from "react";
import {StyleSheet, Text, View } from "react-native";
import { Fab } from "../components/Fab";


const CounterScreen =  () => {
    const [counter, setCounter] = useState(0)
    return(
        <View style={style.container}>
            <Text style={style.title}>
              Contador {counter}
            </Text>
            <Fab
              title="+1"
              onPress={()=>setCounter(counter + 1)}  
            />
            <Fab
              title="-1"
              position="bl"
              onPress={()=>setCounter(counter - 1)}  
            />
            {/* <Button
              title="click"
              onPress={()=>setCounter(counter + 1)}            
            /> */}
            {/* <TouchableOpacity
              style={style.fabLocationL}
              onPress={ () => setCounter(counter - 1 )}
            >
              <View style={style.fab}>
                <Text style={style.fabText}>-1</Text>
              </View>
            </TouchableOpacity> */}
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