import { View, Text, StatusBar, Button, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const AllRegistrations = () => {
    const [Registrations, setRegistrations] = useState();
    const [load, setLoad] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://10.13.118.116:7777/api/registrations")


            const data = await response.json();
            setRegistrations(data);
            console.log(data);
        }
        fetchData();
    }, [load]);

    const Renderitem = ({ item }) => (

        <View>
            <TouchableOpacity style={{ backgroundColor: 'red', padding: 20, marginTop: 7 }}>

                <Text style={{ fontSize: 18 }}>{item.Event}</Text>

            </TouchableOpacity>
        </View>
    )


    return (
        <View>
            <StatusBar />
            <View style={{display:'flex',flexDirection:'row',
                flexWrap:'wrap'
            }}>
                <FlatList
                    data={Registrations}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={Renderitem}
                />

            </View>
        </View>
    )
}

export default AllRegistrations