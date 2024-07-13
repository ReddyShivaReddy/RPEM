import { View, Text, StatusBar, Image, Button, ScrollView, FlatList, StyleSheet, TouchableOpacity, Modal, ImageBackground, Touchable } from 'react-native'
import React, { useState, useEffect } from 'react'


const AllRegistrations = () => {
    const [Registrations, setRegistrations] = useState();
    const [load, setLoad] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [editmodalVisible, setEditModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [Event, setEvent] = useState(null)
    const [count, setCount] = useState(0)
    const [heading, setHeading] = useState()
    const [foodData, setFoodData] = useState({
        veg: 0,
        nonVeg: 0
    });


    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://10.13.118.27:7777/api/registrations")
            const data = await response.json();
            setRegistrations(data);
            console.log(data);
        }
        fetchData();
    }, []);

    // const registerData = Event


    const registered = async (Event) => {
        // console.log(registerData);
        if (Event) {
            const response = await fetch("http://10.13.118.27:7777/api/registered-list", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Event),
            })
            const data = await response.json();
            setSelectedItem(data)
            console.log(data)

            setCount(data.length);
            let veg = 0;
            let nonVeg = 0;
            data.forEach(item => {
                if (item.Food === 'Veg' || item.Food === 'veg' || item.Food === 'VEG') {
                    veg++;
                } else {
                    nonVeg++;
                }
            });
            setFoodData({
                veg,
                nonVeg
            });
        }
    }




    const Renderitem = ({ item }) => (

        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
            <View style={{ width: '85%', borderWidth: 0.9, marginVertical: 10, justifyContent: 'center', alignSelf: 'center', borderRadius: 5 }}>
                <TouchableOpacity style={{ backgroundColor: '#F6F5F5', padding: 20, borderRadius: 10 }} onPress={() => {

                    setEvent(item);
                    // setSelectedItem(item);
                    registered(item);
                    setModalVisible(true);
                }}>
                    <Text style={{ fontSize: 18, }}>{item.title}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'flex-end', justifyContent: 'center', }}>
                <TouchableOpacity style={{ marginBottom: 4 }} onPress={() => { console.log("edit") }}>
                    <Image source={require('../assets/edit.png')} style={{ width: 55, height: 55 }} />
                </TouchableOpacity>
            </View>
        </View>
    )

    const RenderitemEditModal = ({ item }) => {

    }


    const RenderitemModal = ({ item }) => {

        console.log(selectedItem);
        setHeading(item.Event)
        return (
            <View style={{ marginHorizontal: 10 }}>
                <View style={{ backgroundColor: '#F5F5F5', padding: 20, marginTop: 7, display: 'flex', flexDirection: 'row', gap: 10, borderRadius: 15, borderColor: 'black', borderWidth: 1 }}>
                    <View>
                        <Image source={require('../assets/profile.png')} style={{ width: 50, height: 50 }} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.Employee_Email}</Text>
                        <Text>{item.Employee_Name}</Text>
                        <View style={{ borderWidth: 1, borderradius: 17, borderColor: '#8576FF', width: 80, }}>
                            <Text style={{ color: '#8576FF', textAlign: 'center' }}>{item.Food}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };



    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar />

            <View >
                <FlatList
                    data={Registrations}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={Renderitem}
                />


                <Modal
                    // contentContainerStyle={styles.modalContent}
                    visible={modalVisible}
                    animationType='fade'
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20, gap: 10, marginLeft: 10 }}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Image source={require('../assets/back.png')} style={{ width: 30, height: 30, }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 23, paddingLeft: 10, fontWeight: 'bold', color: 'black', }}>{heading}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
                        <Text style={{ textAlign: 'left', fontSize: 15, margin: 7, paddingRight: 10 }}>Total Registrations: {count}</Text>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ textAlign: 'left', fontSize: 15, margin: 7, paddingRight: 10, }}>Veg: <Text style={{ color: '#8576FF' }}>{foodData.veg} </Text></Text>
                            <Text style={{ textAlign: 'left', fontSize: 15, margin: 7, paddingRight: 10 }}>Non-Veg: <Text style={{ color: '#8576FF' }}>{foodData.nonVeg}</Text></Text>
                        </View>
                    </View>

                    <FlatList
                        data={selectedItem}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={RenderitemModal}
                    />
                    {/* <View style={{ margin: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Button title='   Close   ' color='#717999' onPress={() => setModalVisible(false)} style={{ position: 'sticky' }} />
                    </View> */}
                </Modal>
            </View>
        </View>
    )
}

export default AllRegistrations