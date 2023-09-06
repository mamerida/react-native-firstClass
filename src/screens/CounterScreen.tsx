import React, { useState } from "react";
import { Button, Text, View } from "react-native";


const CounterScreen =  () => {
    const [counter, setCounter] = useState(0)
    return(
        <View style={{
          flex:1, //le indica al ponerle 1 que tome todo el espacio disponible
          justifyContent:"center",
    
        }}>
            <Text 
              style={{
                fontSize:55,
                textAlign:"center",
                top:-15
            }}
            >
              Contador {counter}
            </Text>
            <Button
              title="click"
              onPress={()=>setCounter(counter + 1)}            
            />
        </View>
      )
}

export default CounterScreen