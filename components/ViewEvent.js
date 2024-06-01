import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, Button, ScrollView, FlatList, Image, Dimensions } from 'react-native'

const { width } = Dimensions.get('window');

const ViewEvent = () => {
    const [eventData, setEventData] = useState();
    const [please,setPlease]=useState(true)
    useEffect(() => {
        async function fetchData() {
            const resData = await fetch("http://10.13.118.29:7777/api/View-Event");
            const data = await resData.json();
            setEventData(data);
            console.log(data);
        }
        fetchData();
    }, [please]);
    const Renderitem = ({ item }) => (
        <View style={{
            backgroundColor: 'lightgrey',
            // padding: 4,
            marginVertical: 7,
            marginHorizontal: 1,
            borderRadius: 10,
            // width:width
        }}>
            <Image
                source={{
                    uri: item.image
                }}
                style={{ width: width, height: 300 }}
                resizeMode='contain'
            />
            <View style={{ paddingTop:2,justifyContent:'flex-box'}}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Event : {item.title}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Event Date : {item.date}</Text>
            </View>

        </View>)

    return (
        <View>
            <StatusBar />
            <Text style={{ fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>Events</Text>
            <View style={{ alignSelf: 'center' }}>
                {/* <Button title="Add Event" color="green" onPress={fetchData} /> */}
                <FlatList
                    data={eventData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={Renderitem}
                />
            </View>
        </View>
    )
}

export default ViewEvent