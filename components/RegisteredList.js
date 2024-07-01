import { View, Text, StatusBar, Button, ScrollView, FlatList, StyleSheet,TouchableOpacity } from 'react-native'
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

      <View style={styles.item}>
        <Text style={{  fontSize: 15 }}><Text style={{fontWeight:'bold'}}>Event: </Text>{item.Event}</Text>
          <TouchableOpacity  style={[styles.button, { borderRadius: 18 }]}
      >
            <Text style={styles.buttonText}>Unregister</Text>
          </TouchableOpacity>
      </View>
  )



  return (
    <View>
      <StatusBar />
      <View>
        <View style={{
          backgroundColor:'whitesmoke'
        }}>
        <Text style={{fontSize:20,textAlign:'center',fontWeight:'bold',paddingVertical:20}}>My registrations</Text>
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
    backgroundColor: '#F5F5F5',
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 16,
    // borderRadius: 15,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    // borderStyle:'solid',
    // borderColor:'#4D455D',
    // borderWidth:0.19
    elevation:2

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
  // fontWeight: 'bold',
},
})
export default RegisteredList