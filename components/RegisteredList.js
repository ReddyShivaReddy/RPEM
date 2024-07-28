import { View, Text, StatusBar, Button, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

const RegisteredList = () => {

  const [myRegistrations, setMyRegistrations] = useState();
  const [load, setLoad] = useState(true);
  const [event, setEvent] = useState();
  const [refresh, setRefresh] = useState(false)

  const userEmail = {
    "Employee_Email": "shiva@realpage.com"
  }


  const fetchData=async ()=>{
    const response = await fetch("http://192.168.1.8:7777/api/my-registrations", {
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

  const handleRefresh=()=>{
    setRefresh(true);
    fetchData();
    setRefresh(false)
}



  useEffect(() => {
    // async function fetchData() {
    //   const response = await fetch("http://192.168.1.8:7777/api/my-registrations", {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(userEmail),
    //   })


    //   const data = await response.json();
    //   setMyRegistrations(data);
    //   console.log(data);
    // }
    fetchData();
  }, []);


  const deleteEvent = async () => {
    const userData = {
      "Employee_Email": "shiva@realpage.com",
      "Event": event
    }
    console.log(userData)
    const response = await fetch("http://192.168.1.8:7777/api/deleteUser", {
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
      <View style={{
         display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
      }}>
        <View style={{ marginRight: 10, padding:10,backgroundColor: '#F4F9F9',width:65,height:55,borderWidth:0.1,}}>
          <Text>{item.Date}</Text></View>
        <View style={{alignSelf:'center'}}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', }}>{item.Event}</Text></View>
      </View>
      <View>
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
    </View>
  )


  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
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
          refreshing={refresh}
          onRefresh={handleRefresh}

        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 15,
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
    backgroundColor: '#31363F',
    // backgroundColor: '#3FA2F6',
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