import { View, Text, StatusBar, Button, ScrollView, FlatList, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'


const AllRegistrations = () => {
    const [Registrations, setRegistrations] = useState();
    const [load, setLoad] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
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
            const response = await fetch("http://10.13.118.157:7777/api/registrations")
            const data = await response.json();
            setRegistrations(data);
            // console.log(data);
        }
        fetchData();
    }, [load]);

    // const registerData = Event


    const registered = async (Event) => {
        // console.log(registerData);
        if (Event) {
            const response = await fetch("http://10.13.118.157:7777/api/registered-list", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Event),
            })
            const data = await response.json();
            setSelectedItem(data)
            // console.log(data)

            setCount(data.length);
            let veg = 0;
            let nonVeg = 0;

            data.forEach(item => {
                if (item.Food === 'Veg') {
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

        <View>
            <TouchableOpacity style={{ backgroundColor: '#F5F5F5', padding: 20, marginTop: 17 }} onPress={() => {
                // console.log(item)

                setEvent(item);
                // setSelectedItem(item);
                registered(item);
                setModalVisible(true);
            }}>
                <Text style={{ fontSize: 18 }}>{item.Event}</Text>
            </TouchableOpacity>
        </View>
    )




    const RenderitemModal = ({ item }) => {
        // setCount(count+1)

        console.log(selectedItem);
        setHeading(item.Event)
        return (
            <View>
                <View style={{ backgroundColor: '#F5F5F5', padding: 20, marginTop: 7 }}>
                    <Text>{item.Employee_Email}</Text>
                    <Text>{item.Employee_Name}</Text>
                    <Text>{item.Food}</Text>
                </View>
            </View>
        );
    };






    return (
        <View>
            <StatusBar />
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>All Events</Text>
            </View>
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
                    <Text style={{ fontSize: 20, paddingLeft: 10, textAlign: 'center', fontWeight: 'bold' }}>{heading}</Text>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text style={{ textAlign: 'left', fontSize: 15, margin: 7, paddingRight: 10 }}>Total Registrations: {count}</Text>
                        <Text style={{ textAlign: 'left', fontSize: 15, margin: 7, paddingRight: 10 }}>Veg: {foodData.veg}</Text>
                        <Text style={{ textAlign: 'left', fontSize: 15, margin: 7, paddingRight: 10 }}>Non-Veg: {foodData.nonVeg}</Text>

                    </View>

                    <FlatList
                        data={selectedItem}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={RenderitemModal}
                    />
                    <View style={{ margin: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Button title='   Close   ' color='#717999' onPress={() => setModalVisible(false)} style={{ position: 'sticky' }} />
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default AllRegistrations