import { View, Text, StatusBar, Button, ScrollView, FlatList, StyleSheet, } from 'react-native'
import React, { useState, useEffect } from 'react'


const RegisteredList = () => {

  const [myRegistrations, setMyRegistrations] = useState();
  const [load, setLoad] = useState(true);
  const userData = {
    "Employee_Email": "shiva@gmail.com"
  }
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://10.13.118.116:7777/api/my-registrations", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })


      const data = await response.json();
      setMyRegistrations(data);
      console.log(data);
    }
    fetchData();
  }, [load]);




  const Renderitem = ({ item }) => (


<View style={{paddingHorizontal:10,
  
}}>
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 15,
      borderWidth: 0.7,
      borderCurve: 20,
    ali
    }}>
      <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Event : {item.Event}</Text>
      <Button title='Unregister'></Button>
    </View>
    </View>


  )



  return (
    <View>
      <StatusBar />
      <View style={{}}>

        <FlatList
          data={myRegistrations}
          keyExtractor={(item, index) => index.toString()}
          renderItem={Renderitem}
        />
      </View>
    </View>
  )
}

export default RegisteredList