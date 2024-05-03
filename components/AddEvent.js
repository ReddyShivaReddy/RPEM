import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { ImagePicker } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';

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

  const handleImageChange = (image) => {
    setImage(image);
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

  const handleSubmit = () => {

  };

  const handleImagePicker = () => {
    ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      maxHeight: 200,
      maxWidth: 200,
    }, (response) => {
      if (response.didCancel) {
        console.log('Image picker cancelled');
      } else if (response.error) {
        console.log('Image picker error:', response.error);
      } else {
        setImage(response.uri);
      }
    });
  };

  return (
    <View style={styles.form}>
      <StatusBar />
      <Text style={{ fontSize: 25, alignSelf: 'center', marginBottom: 20 }}>New Event Form</Text>
      <Text>Event Name</Text>
      <TextInput
        placeholder="Event Title"
        value={title}
        onChangeText={handleTitleChange}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
        
      />
      <Text>About the Event</Text>
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={handleDescriptionChange}
        style={{ height: 150, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, textAlignVertical: 'top', padding: 10, }}
        multiline={true}
      />
      <Text>Type of Event</Text>
      <View style={{borderWidth:1,borderColor:'grey',}}>
        <Picker
          selectedValue={isFoodEvent ? 'true' : 'false'}
          onValueChange={handleIsFoodEventChange}
        >
          <Picker.Item label="Food Event" value="true" />
          <Picker.Item label="Non-Food Event" value="false" />
        </Picker>
      </View>
      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={handleLocationChange}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
      />
      <TextInput
        placeholder="Date"
        value={date}
        onChangeText={handleDateChange}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
      />
      <TouchableOpacity onPress={handleImagePicker}>
        <Text>Upload Image</Text>
      </TouchableOpacity>
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 100, height: 100 }}
        />
      )}
      <Button title="Add Event" onPress={handleSubmit} />
    </View>
  );
};
const styles = StyleSheet.create({
  form: {
    gap: 10,
    padding: 10,
  }
})

export default AddEvent;
