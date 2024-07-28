import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, Button, ScrollView, FlatList, Image, Pressable, Dimensions, StyleSheet, TouchableOpacity, Modal, TextInput, } from 'react-native'
import CheckBox from 'react-native-check-box';
const { width } = Dimensions.get('window');

const ViewEvent = () => {
    const [eventData, setEventData] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [please, setPlease] = useState(true)
    const [selectedItem2, setSelectedItem2] = useState({});
    const [modalVisible2, setModalVisible2] = useState(false);
    const [Event, setEvent] = useState()
    const [date, setDate] = useState()
    const [refresh, setRefresh] = useState(false)
    const [isChecked, setIsChecked] = useState(true)
    const [search, setSearch] = useState()
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Food, setFood] = useState('');

    const handleNameChange = (text) => {
        setName(text);
    }

    const handleFoodChange = (text) => {
        setFood(text)
    }

    const handleEmailChange = (text) => {
        setEmail(text)
    }

    const fetchData=async ()=>{
        const resData = await fetch("http://192.168.1.8:7777/api/View-Event");
        const data = await resData.json();
        setEventData(data);
        // console.log(data);
    }


    const handleRefresh=()=>{
        setRefresh(true);
        fetchData();
        setRefresh(false)
    }

    useEffect(() => {
        // async function fetchData() {
        //     const resData = await fetch("http://192.168.1.8:7777/api/View-Event");
        //     const data = await resData.json();
        //     setEventData(data);
        //     // console.log(data);
        // }
        fetchData();
    });



    const registerData = {
        "EmpName": Name,
        "EmpEmail": Email,
        "Food": Food,
        "Event": Event,
        "Date": date
    }

    const register = async () => {
        console.log(registerData);
        const response = await fetch("http://192.168.1.8:7777/api/register", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registerData),
        })
        console.log(response)
        setModalVisible(false);
        setModalVisible2(false);
        setEmail();
        setName();
        setFood();
    }



    const registerEvent = ({ item = { selectedItem } }) => {
        // console.log(item.selectedItem.title);
        setSelectedItem2(item);
        setModalVisible2(true);
        setEvent(item.selectedItem.title)
        setDate(item.selectedItem.date)
    }
    const Renderitem = ({ item }) => (

        <View style={{
            marginHorizontal: 10,
            marginVertical: 10,
            backgroundColor: '#FEFBF7',
            borderRadius: 4,

        }} >
            <View style={{
                marginHorizontal: 4,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                marginBottom: 10,
                backgroundColor: '#FEFBF7',

            }}><View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Image
                        source={{
                            uri: item.image
                        }}
                        style={styles.imagestyle}
                        resizeMode='contain'
                    />
                    <View style={{ paddingTop: 2, justifyContent: 'center', marginHorizontal: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item.title}</Text>
                        <Text><Text style={{ fontWeight: 'bold', fontSize: 15 }}></Text>{item.date}</Text>
                    </View>
                </View>
                <View style={{ alignSelf: 'center', marginRight: 10 }}>
                    <Pressable style={{ backgroundColor: '#3FA2F6', height: 35, borderRadius: 10, width: 90, justifyContent: 'center', alignSelf: 'center', }} onPress={() => {
                        setSelectedItem(item);
                        setModalVisible(true);
                    }} >
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 15 }}>View Event</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
    const handleSearch = () => {

    }
    const searchIcon = require('../assets/search.png')
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar />
            <View style={{ marginHorizontal: 15 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', }}>Let's find you</Text>
                <Text style={{ fontSize: 25, fontWeight: 'bold', }}>some events!</Text>
                <View style={styles.container}>
                    <Image source={require('../assets/search.png')}
                        style={styles.icon}
                    />
                    <TextInput value={search}
                        onChangeText={handleSearch}
                        placeholder='Search...'
                        //style={{ height: 45, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, borderRadius: 10, marginTop: 7 }}
                        style={styles.input}
                    />
                </View>
            </View>
            {/* <Text style={{ fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>Events</Text> */}
            <View style={{}}>
                <FlatList
                    data={eventData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={Renderitem}
                    refreshing={refresh}
                    onRefresh={handleRefresh}
                />
            </View>
            <Modal
                contentContainerStyle={styles.modalContent}
                visible={modalVisible}
                animationType='fade'
                onRequestClose={() => setModalVisible(false)}
            >
                <ScrollView style={styles.modalContainer}>
                    {/* <Text style={{ fontSize: 30, padding: 15, color: '#8AAEE0', fontWeight: 'bold', textAlign: 'center' }}>Register Event</Text> */}
                    {/* {selectedItem && Object.keys(selectedItem).map((key) => (
                        <Text key={key} style={{ fontSize: 20, padding: 7, }}>
                            <Text style={{ fontWeight: 'bold', }}>{key}: </Text>{selectedItem[key]}
                        </Text>
                    ))} */}

                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20, gap: 10, marginLeft: 10, marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Image source={require('../assets/back.png')} style={{ width: 30, height: 30, }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 17, paddingLeft: 10, fontWeight: 'bold', color: 'black', marginTop: 4 }}>Checkout Page</Text>
                    </View>
                    {selectedItem && Object.keys(selectedItem).map((key) => {
                        return (
                            <View>
                                {key == 'image' && (
                                    <Image
                                        source={{ uri: selectedItem[key] }}
                                        style={{ width: '100%', height: undefined, aspectRatio: 1 }}
                                        resizeMode="contain"
                                    />
                                )}
                            </View>
                        );
                    })}
                    {selectedItem && Object.keys(selectedItem).map((key) => {
                        return (
                            <View>
                                {key == 'title' && (
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10, marginTop: 20, marginBottom: 10 }}>{selectedItem[key]}</Text>
                                )}
                            </View>
                        );
                    })}
                    {selectedItem && Object.keys(selectedItem).map((key) => {
                        return (
                            <View style={{ marginHorizontal: 10, marginVertical: 1, }}>
                                {key !== 'image' && key !== 'title' && key !== 'description' && key !== 'foodEvent' && key !== 'EventType' && (
                                    <View>
                                        <Text key={key} style={{ fontWeight: 'normal' }}>
                                            {key === 'date'
                                                ? <Image source={require('../assets/calendar.png')} style={{ width: 20, height: 20 }} />
                                                : key === 'location'
                                                    ? <Image source={require('../assets/location.png')} style={{ width: 20, height: 20 }} /> : key
                                            }
                                            <Text>   {selectedItem[key]}</Text>
                                        </Text>
                                    </View>
                                )}
                            </View>
                        );
                    })}

                    {/* <View style={{marginVertical:10,marginHorizontal:10,borderWidth:0.7,borderColor:'grey',padding:10}}>
    <Text style={{fontWeight:'bold',fontSize:17}}>Participants</Text>
</View> */}


                    {selectedItem && Object.keys(selectedItem).map((key) => {
                        return (
                            <View>
                                {key == 'description' && (
                                    <View>
                                        <Text style={{ marginHorizontal: 10, marginVertical: 10, fontSize: 19, fontWeight: 'bold' }}>About Event</Text>
                                        <Text style={{ fontSize: 15, marginHorizontal: 10, marginBottom: 10 }}>{selectedItem[key]}</Text>
                                    </View>
                                )}
                            </View>
                        );
                    })}
                    {selectedItem && Object.keys(selectedItem).map((key) => {
                        return (
                            <View>
                                {key == 'foodEvent' && (
                                    <View>
                                        <Text style={{ fontSize: 15, marginHorizontal: 10, marginBottom: 10 }}><Text>{key === 'foodEvent' ? <Text style={{ fontWeight: 'bold' }}>Food Event: </Text> : <Text></Text>}</Text><Text>{selectedItem[key] === 'true'
                                            ? <Text >Yes </Text>
                                            : <Text>No</Text>
                                        }</Text>

                                        </Text>
                                    </View>
                                )}
                            </View>
                        );
                    })}
                    {selectedItem && Object.keys(selectedItem).map((key) => {
                        return (
                            <View>
                                {key == 'EventType' && (
                                    <View>
                                        <Text style={{ fontSize: 15, marginHorizontal: 10, marginBottom: 10 }}><Text>{key === 'EventType' ? <Text style={{ fontWeight: 'bold' }}>Type of Event: </Text> : <Text></Text>}</Text><Text>{selectedItem[key]}

                                        </Text>

                                        </Text>
                                    </View>
                                )}
                            </View>
                        );
                    })}

                    <View style={{ padding: 30, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row', gap: 20 }}>
                        <Button title='Register' color='#3572EF' onPress={registerEvent} />
                        {/* <Button title='   Close   ' color='#3572EF' onPress={() => setModalVisible(false)} /> */}
                    </View>
                </ScrollView>
            </Modal>










            <Modal
                contentContainerStyle={styles.modalContent}
                visible={modalVisible2}
                animationType='fade'
                onRequestClose={() => setModalVisible2(false)}
            >
                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20, gap: 10, marginLeft: 10, marginVertical: 10 }}>
                    <TouchableOpacity onPress={() => setModalVisible2(false)}>
                        <Image source={require('../assets/back.png')} style={{ width: 30, height: 30, }} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ fontSize: 20, marginLeft: 10, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Register Event</Text>
                    </View>
                </View>
                <ScrollView style={styles.modalContainer}>
                    {/* <Text style={{ fontSize: 30, padding: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Register Event</Text> */}

                    <View style={{ paddingHorizontal: 10, borderRadius: 0.3, }}>
                        <Text style={{ marginTop: 8 }}>
                            Enter your name
                        </Text>
                        <TextInput
                            value={Name}
                            onChangeText={handleNameChange}
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, borderRadius: 10, marginTop: 7 }}
                        />
                        <Text style={{ marginTop: 8 }}>
                            Enter your email
                        </Text>
                        <TextInput
                            value={Email}
                            onChangeText={handleEmailChange}
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, borderRadius: 10, marginTop: 7, marginBottom: 7 }}
                        />
                        {selectedItem && Object.keys(selectedItem).map((key) => {

                            return (
                                <View >
                                    {key === 'title' && (
                                        <View>
                                            <Text key={key} style={{ fontWeight: 'normal' }}>
                                                {key === 'title'
                                                    ? <Text>Event </Text>
                                                    : key
                                                }
                                            </Text>
                                            <TextInput
                                                value={selectedItem[key]}
                                                style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, borderRadius: 10, marginTop: 7 }}
                                            />
                                        </View>
                                    )}
                                </View>
                            );
                        })}
                        {selectedItem && Object.keys(selectedItem).map((key) => {

                            return (
                                <View >
                                    {key === 'date' && (
                                        <View>
                                            <Text key={key} style={{ fontWeight: 'normal' }}>
                                                {key === 'date'
                                                    ? <Text>Event date </Text>
                                                    : key
                                                }
                                            </Text>
                                            <TextInput
                                                value={selectedItem[key]}
                                                style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, borderRadius: 10, marginTop: 7 }}
                                            />
                                        </View>
                                    )}
                                </View>
                            );
                        })}
                        <Text style={{ marginTop: 8 }}>
                            Veg / Non-Veg
                        </Text>
                        <TextInput
                            value={Food}
                            onChangeText={handleFoodChange}
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, borderRadius: 10, marginTop: 7 }}
                        />

                    </View>
                    <CheckBox
                        style={{ flex: 1, padding: 10 }}
                        onClick={() => {
                            setIsChecked(isChecked);
                        }}
                        isChecked={isChecked}
                        rightText="I agree to the terms and conditions"
                    />


                    <View style={{ padding: 30, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row', gap: 20 }}>
                        <Button title='Register' color='#3572EF' onPress={register} />
                        {/* <Button title='Close' color='#3572EF' onPress={() => setModalVisible2(false)} /> */}
                    </View>
                </ScrollView>
            </Modal>


        </View>
    )
}

const styles = StyleSheet.create({
    imagestyle: {
        width: 75,
        height: 75
        // width: width,
        // height: undefined,
        // aspectRatio: 1,
    },
    container: {
        marginTop: 10,
        // position: 'relative',
    },
    icon: {
        position: 'absolute',
        left: 10,
        top: 12,
        width: 35,
        height: 35
    },
    input: {
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 50,
        borderRadius: 10,
        marginTop: 7,
        fontSize: 17
    },
})
export default ViewEvent