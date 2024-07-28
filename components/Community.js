import { View, Text, StatusBar, ScrollView, Button, StyleSheet, TouchableOpacity, Modal, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'

const Community = () => {
    const [data, setData] = useState()
    const [refresh, setRefresh] = useState(false)
    const fetchData = async () => {
        const resData = await fetch("http://192.168.1.8:7777/api/ViewPosts");
        const jsonData = await resData.json();
        setData(jsonData);
        console.log(data[0])
    }
    const handleRefresh = () => {
        setRefresh(true);
        fetchData();
        setRefresh(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const RenderItem = ({ item }) => (
        <View style={{
            marginHorizontal: 10, gap: 10, borderBottomWidth: 0.5, marginVertical: 10
        }}>
            <View style={{ flexDirection: 'row', }}>
                <Image source={require('../assets/profile.png')} style={{ width: 45, height: 45 }} />
                <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.Name}</Text>
                    <Text>{item.Time}</Text>
                </View>
            </View>
            <View style={{ gap: 10, marginBottom: 10 }}>
                <Text>{item.Thoughts}</Text>
                <Image source={{ uri: item.Image }}
                    style={{ width: '100%', height: undefined, aspectRatio: 1.5 }}
                    resizeMode="cover" />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>add like logo</Text>
                    <Text>add comment logo</Text>

                </View>
            </View>
        </View>
    )


    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar />
            <Text style={{ margin: 10, fontSize: 25, fontWeight: 'semi-bold', }}>See what's new in your communities and discover</Text>
            <View>
                <View>
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={RenderItem}
                        refreshing={refresh}
                        onRefresh={handleRefresh}
                        // ListFooterComponent={<View style={{ height: 100 }} />
                        contentContainerStyle={{ paddingBottom: 100 }}
                    />
                </View>
            </View>
        </View>
    )
}

export default Community