import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, Button, ScrollView, FlatList, Image, Dimensions, StyleSheet, TouchableOpacity, Modal,TextInput, } from 'react-native'
import RegisterForm from './RegisterForm'

const { width } = Dimensions.get('window');

const ViewEvent = () => {
    const [eventData, setEventData] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [please, setPlease] = useState(true)
    const [selectedItem2, setSelectedItem2] = useState({});
    const [modalVisible2, setModalVisible2] = useState(false);



    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Food, setFood] = useState('');

    const handleNameChange=()=>{

    }

    const handleFoodChange=()=>{
        
    }

    const handleEmailChange=()=>{
        
    }

    useEffect(() => {
        async function fetchData() {
            const resData = await fetch("http://192.168.76.150:7777/api/View-Event");
            const data = await resData.json();
            setEventData(data);
            // console.log(data);
        }
        fetchData();
    }, [please]);
    const registerEvent = ({ item }) => {
        console.log("hello");
        setSelectedItem2(item);
        setModalVisible2(true);
    }
    const Renderitem = ({ item }) => (
        <TouchableOpacity onPress={() => {
            setSelectedItem(item);
            setModalVisible(true);
        }}>
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
                    style={styles.imagestyle}
                    resizeMode='contain'
                />
                <View style={{ paddingTop: 2, justifyContent: 'flex-box' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Event : {item.title}</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Event Date : {item.date}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )

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
            <Modal
                contentContainerStyle={styles.modalContent}
                visible={modalVisible}
                animationType='fade'
                onRequestClose={() => setModalVisible(false)}
            >
                <ScrollView style={styles.modalContainer}>
                    <Text style={{ fontSize: 30, padding: 15, color: '#8AAEE0', fontWeight: 'bold', textAlign: 'center' }}>Register Event</Text>
                    {/* {selectedItem && Object.keys(selectedItem).map((key) => (
                        <Text key={key} style={{ fontSize: 20, padding: 7, }}>
                            <Text style={{ fontWeight: 'bold', }}>{key}: </Text>{selectedItem[key]}
                        </Text>
                    ))} */}


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
                            <View style={{ paddingHorizontal: 10 }}>
                                {key !== 'image' && (
                                    <View>
                                        <Text key={key} style={{ fontWeight: 'normal' }}>
                                            {key === 'title'
                                                ? <Text style={{ fontWeight: 'bold' }}>Event: </Text>
                                                : key === 'description'
                                                    ? <Text style={{ fontWeight: 'bold' }}>About Event: </Text>
                                                    : key === 'foodEvent'
                                                        ? <Text style={{ fontWeight: 'bold' }}>Food: </Text>
                                                        : key === 'date'
                                                            ? '📅 '
                                                            : key === 'location'
                                                                ? '📍 ' : key
                                            }
                                            <Text>{selectedItem[key]}</Text>
                                        </Text>
                                    </View>
                                )}
                            </View>
                        );
                    })}

                    <View style={{ padding: 30, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row', gap: 20 }}>
                        <Button title='Register' color='#717999' onPress={registerEvent} />
                        <Button title='   Close   ' color='#717999' onPress={() => setModalVisible(false)} />
                    </View>
                </ScrollView>
            </Modal>










            <Modal
                contentContainerStyle={styles.modalContent}
                visible={modalVisible2}
                animationType='fade'
                onRequestClose={() => setModalVisible2(false)}
            >
                <ScrollView style={styles.modalContainer}>
                    <Text style={{ fontSize: 30, padding: 15, color: '#8AAEE0', fontWeight: 'bold', textAlign: 'center' }}>Register Event</Text>

                    <View>
                        <Text>
                            Enter your name
                        </Text>
                        <TextInput 
                        value={Name}
                        onChangeText={handleNameChange}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
                         />
                         <Text>
                            Enter your email
                        </Text>
                        <TextInput 
                        value={Email}
                        onChangeText={handleEmailChange}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
                         />
                         <Text>
                            Veg / Non-Veg
                        </Text>
                        <TextInput 
                        value={Food}
                        onChangeText={handleFoodChange}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
                         />
                    </View>

                    {selectedItem && Object.keys(selectedItem).map((key) => {
                        return (
                            <View style={{ paddingHorizontal: 10 }}>
                                {key !== 'image' && (
                                    <View>
                                        <Text key={key} style={{ fontWeight: 'normal' }}>
                                            {/* {key === 'title'
                                                ? <Text style={{ fontWeight: 'bold' }}>Event: </Text>
                                                : key === 'description'
                                                    ? <Text style={{ fontWeight: 'bold' }}>About Event: </Text>
                                                    : key === 'foodEvent'
                                                        ? <Text style={{ fontWeight: 'bold' }}>Food: </Text>
                                                        : key === 'date'
                                                            ? '📅 '
                                                            : key === 'location'
                                                                ? '📍 ' : key
                                            } */}
                                            <Text>{selectedItem[key]}</Text>
                                        </Text>
                                    </View>
                                )}
                            </View>
                        );
                    })}

                    <View style={{ padding: 30, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row', gap: 20 }}>
                        <Button title='Register' color='#717999' onPress={registerEvent} />
                        <Button title='   Close   ' color='#717999' onPress={() => setModalVisible2(false)} />
                    </View>
                </ScrollView>
            </Modal>







        </View>
    )
}

const styles = StyleSheet.create({
    imagestyle: {

        width: width,
        height: undefined,
        aspectRatio: 1,

    },
})
export default ViewEvent