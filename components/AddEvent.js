import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';


const AddEvent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [isFoodEvent, setIsFoodEvent] = useState(true);
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  const handleTitleChange = (text) => {
    setTitle(text);
  };
  const handleDescriptionChange = (text) => {
    setDescription(text);
  };
  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
      // maxHeight: 200,
      // maxWidth: 200,
    });
    if (!result.canceled) {
      const base64Image = await convertImageToBase64(result.assets[0].uri);
      setImage(base64Image);
      // setImage(result.assets[0].uri);
      // console.log(result);
      console.log(base64Image);
    } else {
      console.log("Image selection was canceled");
    }
  };
  const convertImageToBase64 = async (imageUri) => {
    const response = await fetch(imageUri);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
  };
  const handleIsFoodEventChange = (itemValue, itemIndex) => {
    setIsFoodEvent(itemValue === 'true');
  };
  const handleLocationChange = (text) => {
    setLocation(text);
  };
  const handleDateChange = (text) => {
    setDate(text);
  };
const data={
  "title":title,
  "description":description,
  "image":image,
  "isFoodEvent":isFoodEvent,
  "location":location,
  "date":date
};
  const handleSubmit = async () => {
    console.log(data);
    const response = await fetch("http://10.13.118.130:7777/api/Adding-Event", {
      method:'POST',
        headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json",
        },
        body:JSON.stringify(data),
      })
      const responseData = await response.text();
      console.log(responseData);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar />
      <View style={styles.form}>
        {/* <View style={{backgroundColor:'#3FA2F6'}}>

        <Text style={{ fontSize: 25, alignSelf: 'center', marginBottom: 20, }}>Add New Event</Text>
        </View> */}
        <Text>Event Name</Text>
        <TextInput
          placeholder="Event Title"
          value={title}
          onChangeText={handleTitleChange}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10,borderRadius:10 }}
        />
        <Text>About the Event</Text>
        <TextInput
          placeholder="Description about Event"
          value={description}
          onChangeText={handleDescriptionChange}
          style={{ height: 150, borderColor: 'gray',borderRadius:10 , borderWidth: 1, paddingLeft: 10, textAlignVertical: 'top', padding: 10, }}
          multiline={true}
        />
        <Text>Type of Event</Text>
        <View style={{ borderWidth: 1, borderColor: 'grey',borderRadius:10  }}>
          <Picker
            selectedValue={isFoodEvent ? 'true' : 'false'}
            onValueChange={handleIsFoodEventChange}
          >
            <Picker.Item label="Food Event" value="true" />
            <Picker.Item label="Non-Food Event" value="false" />
          </Picker>
        </View>
        <Text>Event Location</Text>
        <TextInput
          placeholder="Location"
          value={location}
          onChangeText={handleLocationChange}
          style={{ height: 40, borderColor: 'gray',borderRadius:10 , borderWidth: 1, paddingLeft: 10 }}
        />
        <Text>Event Date</Text>
        <TextInput
          placeholder="Date"
          value={date}
          onChangeText={handleDateChange}
          style={{ height: 40, borderColor: 'gray',borderRadius:10 , borderWidth: 1, paddingLeft: 10, }}
        />
        <View style={{ width: 220, alignSelf: 'center',justifyContent:'center' }}>
          <TouchableOpacity onPress={handleImagePicker} style={styles.imageSelector}>
           <Image source={require('../assets/downloadIcon.png')} style={{width:50,height:50}} />
          {/* <Icon name='upload' color='#717999' size={30} style={{alignSelf:'center'}} /> */}
            <Text style={{fontSize:15,marginTop:13}}>Add Event Image</Text>
          </TouchableOpacity>
        </View>
        <View>
        {image && (
          <View>
          <Image
            source={{ uri: image }}
            style={styles.imageStyle}
          />
          {/* <Text>Image uploaded Successfully</Text> */}
          </View>
        )}
        </View>
        <View style={styles.submitButton}>
          <Button title="Add Event" color="#3FA2F6" onPress={handleSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  form: {
    gap: 10,
    padding: 7,
  },
  submitButton: {
    width: '40%',
    alignSelf: 'center',
    marginBottom:20
  },
  imageStyle:{
    width:'100%',
    height:400
  },
  imageSelector:{
    // alignSelf:'center',
     display:'flex', flexDirection:'row',
     gap:10,
    borderWidth:1,  
    borderStyle:'dashed',
    marginTop:10,
    borderRadius:10,
    padding:20
    // paddingVertical:30,
    // paddingHorizontal:90
  },
})

export default AddEvent;