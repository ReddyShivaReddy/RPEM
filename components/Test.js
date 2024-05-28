import { View, Text, Button,StatusBar } from 'react-native'
import React,{useState} from 'react'


const Test = () => {
    const [data,setData]=useState();
   const generate=async ()=>{
    const resp=await fetch("https://official-joke-api.appspot.com/jokes/ten");
    const respData=await resp.text();
    console.log(respData)
    setData(respData);
   }
   // https://v2.jokeapi.dev/joke/Any?format=txt&safe-mode
  return (
    <View>
        <StatusBar />
        <Button  onPress={generate} title="generate" />
      <Text>{data}</Text>
    </View>
  )
}

export default Test
