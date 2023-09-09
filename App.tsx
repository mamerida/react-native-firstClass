import React from "react";
import HellowWorldScreen from "./src/screens/HellowWorldScreen";
import CounterScreen from "./src/screens/CounterScreen";
import { BoxObjectModelScreen } from "./src/screens/BoxObjectModelScreen";
import { SafeAreaView } from "react-native";

const App = () =>{
    return(
      <SafeAreaView>
        {/* <HellowWorldScreen/>
        <CounterScreen/> */}
        <BoxObjectModelScreen/>
      </SafeAreaView>
    )
}

export default App