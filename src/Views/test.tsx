import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../reducers/contador";
import store from "../store";

const Test = ():React.JSX.Element => {
  const count = useSelector((state:any) => state.counter.value)
  const dispatch = useDispatch()
  
  return(
    <View>
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
    </View>
  );
}

export default Test;