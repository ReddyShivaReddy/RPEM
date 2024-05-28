import React, { useState } from 'react'
import { View, Text, StatusBar, Button, ScrollView, FlatList } from 'react-native'



const ViewEvent = () => {
    const [eventData, setEventData] = useState();
    async function fetchData() {
        const resData = await fetch("http://10.13.120.150:7777/api/View-Event");
        const data = await resData.text();
        setEventData(data);
        console.log(data);
    }
    //   fetchData();
    return (
        <View>
            <StatusBar />
            <Text>ViewEvent</Text>
            <View>
                <Button title="Add Event" color="green" onPress={fetchData} />
                <FlatList
                    data={eventData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View>
                            <Text>Hi</Text>
                            <Text>{item.title}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

export default ViewEvent