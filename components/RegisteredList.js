import { View, Text, StatusBar, Button, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

const RegisteredList = () => {

  const [myRegistrations, setMyRegistrations] = useState();
  const [load, setLoad] = useState(true);
  const [event, setEvent] = useState();


  const userEmail = {
    "Employee_Email": "shiva@realpage.com"
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://10.13.118.27:7777/api/my-registrations", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userEmail),
      })


      const data = await response.json();
      setMyRegistrations(data);
      console.log(data);
    }
    fetchData();
  }, []);


  const deleteEvent = async () => {
    const userData = {
      "Employee_Email": "shiva@realpage.com",
      "Event": event
    }
    console.log(userData)
    const response = await fetch("http://10.13.118.27:7777/api/deleteUser", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
    fetchData();

  }


  const Renderitem = ({ item }) => (

    <View style={styles.item}>
      <Text style={{ fontSize: 15 }}><Text style={{ fontWeight: 'bold' }}>Event: </Text>{item.Event}</Text>
      <TouchableOpacity style={[styles.button, { borderRadius: 18 }]}
        onPress={() => {
          console.log(item.Event)
          setEvent(item.Event)
          deleteEvent();
        }}
      >
        <Text style={styles.buttonText}>Unregister</Text>
      </TouchableOpacity>
    </View>
  )


  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <StatusBar />
      <View >
        <View style={{
          backgroundColor: 'whitesmoke'
        }}>
          {/* <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold', paddingVertical: 20 }}>My registrations</Text> */}
        </View>
        <FlatList
          data={myRegistrations}
          keyExtractor={(item, index) => index.toString()}
          renderItem={Renderitem}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2

  },
  button: {
    backgroundColor: '#3FA2F6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
})
export default RegisteredList