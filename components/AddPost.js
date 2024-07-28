import { View, Text, KeyboardAvoidingView, StatusBar, Image, TextInput, Platform, Pressable, ScrollView,TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker';

const AddPost = () => {
    const [thoughts, setThoughts] = useState('')
    const [image, setImage] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());


    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    },[])

    const handleImagePicker = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: false,
          aspect: [4, 3],
          quality: 1,

        });
        if (!result.canceled) {
          const base64Image = await convertImageToBase64(result.assets[0].uri);
          setImage(base64Image);
          // setImage(result.assets[0].uri);
          console.log(base64Image);
        } else {
          console.log("Image selection was canceled");
        }
      };
      
      const data={
        'Name':'rreddy',
        'Time':currentTime.toLocaleTimeString(),
        'Thoughts':thoughts,
        'Image':image
      }

      const postData=async ()=>{
        const response = await fetch("http://192.168.1.8:7777/api/AddPost", {
            method:'POST',
              headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
              },
              body:JSON.stringify(data),
            })
      }




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



    const handleThoughtChange = (text) => {
        setThoughts(text);
    }
    

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar />
            {/* <KeyboardAvoidingView
                behavior="padding"
                keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
                style={{ marginHorizontal: 10 }}
            > */}
            <View style={{flexDirection:'row', alignSelf:'flex-end',marginHorizontal:10,gap:20}}>
                <Pressable onPress={handleImagePicker} style={{ alignSelf: 'center',  }}>
                    <Image source={require('../assets/photo.png')} onPress={handleImagePicker} style={{ width: 30, height: 30 }} />
                </Pressable>
                <Pressable style={{ alignSelf: 'flex-end', width: 70, height: 40, backgroundColor: '#3FA2F6', borderRadius: 20, justifyContent: 'center' }} onPress={postData} >
                    <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>Post</Text>
                </Pressable>
            </View>
            <TextInput
                placeholder="Share your thoughts....."
                value={thoughts}
                onChangeText={handleThoughtChange}
                multiline={true}
                style={{ fontSize: 17,marginHorizontal:10 }}
            >
            </TextInput>
            {/* </KeyboardAvoidingView> */}
        </ScrollView>
    )
}

export default AddPost