import React from "react";
import HellowWorldScreen from "./src/screens/HellowWorldScreen";
import CounterScreen from "./src/screens/CounterScreen";
import { BoxObjectModelScreen } from "./src/screens/BoxObjectModelScreen";
import { SafeAreaView } from "react-native";
import { DimensionesScreen } from "./src/screens/DimensionesScreen";
import { PositionRelative } from "./src/screens/PositionRelative";
import FlexScreen from "./src/screens/FlexScreen";

const App = () =>{
    return(
      <SafeAreaView style={{flex:1}}>
        {/* <HellowWorldScreen/> */}
        {/* <CounterScreen/> */}
        {/* <BoxObjectModelScreen/> */}
        {/* <DimensionesScreen/> */}
        {/* <PositionRelative/> */}
        <FlexScreen/>
      </SafeAreaView>
    )
}

export default App