// import React, { useState } from 'react';
// import { Button, Image, View, StatusBar } from 'react-native';
// import ImagePicker,{launchImageLibrary} from 'react-native-image-picker';

 
// const ImagePickerExample = () => {
//   const [pickedImage, setPickedImage] = useState(null);

//   const pickImageFromLibrary = async () => {
//     const options = {
//       mediaType: 'photo',
//       source: ImagePicker.launchImageLibraryOptions,
//       allowsEditing: true,
//       aspect: [4, 3],
//     };

//     try {
//       const result = await ImagePicker.launchImageLibrary(options);
//       if (!result.cancelled) {
//         setPickedImage(result.uri);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View>
//       <StatusBar />
//       <Button title="Pick Image from Gallery" onPress={pickImageFromLibrary} />
//       {pickedImage && (
//         <Image source={{ uri: pickedImage }} style={{ width: 200, height: 200 }} />
//       )}
//     </View>
//   );
// };

// export default ImagePickerExample;






// // import React, { useState } from 'react';
// // import { View, TextInput, Button, Text, StatusBar } from 'react-native';

// // const FileInput = () => {
// //   const [file, setFile] = useState(null);

// //   const handleFileChange = (event) => {
// //     setFile(event.target.files[0]);
// //   };

// //   return (
// //     <View>
// //         <StatusBar />
// //         <Text>Hello</Text>
// //       <TextInput
// //         type="file"
// //         accept="image/*"
// //         onChangeText={handleFileChange}
// //       />
// //       {file && <Button title="Upload" onPress={() => console.log(file)} />}
// //     </View>
// //   );
// // };

// // export default FileInput;







import React, { useState } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import { launchImageLibrary as _launchImageLibrary, launchCamera as _launchCamera } from 'react-native-image-picker';
let launchImageLibrary = _launchImageLibrary;
let launchCamera = _launchCamera;
const Test = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, handleResponse);
  };

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, handleResponse);
  };

  const handleResponse = (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;
      setSelectedImage(imageUri);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{ flex: 1 }}
          resizeMode="contain"
        />
      )}
      <View style={{ marginTop: 20 }}>
        <Button title="Choose from Device" onPress={openImagePicker} />
      </View>
      <View style={{ marginTop: 20, marginBottom: 50 }}>
        <Button title="Open Camera" onPress={handleCameraLaunch} />
      </View>
    </View>
  );
};

export default Test;