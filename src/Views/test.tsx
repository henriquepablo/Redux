import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, theme } from "../reducers/contador";
import store from "../store";

const Test = ():React.JSX.Element => {
  const count = useSelector((state:any) => state.counter.value)
  const color = useSelector((state:any) => state.counter.color)
  const dispatch = useDispatch()
  
  return(
    <View style={{backgroundColor: `${color}`, flex: 1}}>
      <Text>
        Contador: {count}
      </Text>
      
      <TouchableOpacity onPress={() => dispatch(increment())} activeOpacity={0.5} style={{backgroundColor: "#000000b6"}}>
        <Text>
          Incrementar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(decrement())} activeOpacity={0.5} style={{backgroundColor: "#000000b6"}}>
        <Text>
          Decrementar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log(dispatch(theme()))} activeOpacity={0.5} style={{backgroundColor: "#000000b6"}}>
        <Text>
          Change Theme
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Test;