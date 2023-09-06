import React from "react";
import { Text, View } from "react-native";


const CounterScreen =  () => {
    return(
        <View style={{
          flex:1,
          justifyContent:"center",
    
        }}>
            <Text 
              style={{
                fontSize:55,
                textAlign:"center"
            }}
            >
              Hola Mundo
            </Text>
        </View>
      )
}

export default CounterScreen