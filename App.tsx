import React from "react";
import HellowWorldScreen from "./src/screens/HellowWorldScreen";
import CounterScreen from "./src/screens/CounterScreen";
import { BoxObjectModelScreen } from "./src/screens/BoxObjectModelScreen";
import { SafeAreaView } from "react-native";
import { DimensionesScreen } from "./src/screens/DimensionesScreen";

const App = () =>{
    return(
      <SafeAreaView>
        {/* <HellowWorldScreen/> */}
        {/* <CounterScreen/> */}
        {/* <BoxObjectModelScreen/> */}
        <DimensionesScreen/>
      </SafeAreaView>
    )
}

export default App