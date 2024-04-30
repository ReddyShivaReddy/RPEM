import React, { useState } from "react";
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    KeyboardAvoidingView,
    Text,
    Image,
    Platform,
    TouchableOpacity,StatusBar
} from "react-native";
import LottieView from 'lottie-react-native';

const logoURL = require('../assets/RealpageLogo.png');
const LoginPage = ({onLoginSuccess}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};

        if (!username) errors.username = "Username is required";
        if (!password) errors.password = "Password is required";

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSubmit = () => {
        // if (validateForm()) {
        //     console.log("Submitted", username, password);
        //     setUsername("");
        //     setPassword("");
        //     setErrors({});
        // }
   
            if (validateForm()) {
               
                if (username === "Admin" && password === "Password") {

                    onLoginSuccess();
                } else {
                    setErrors({ general: "Invalid username or password" });
                }
            }
        
    };

    return (
        <>
<StatusBar />
            <KeyboardAvoidingView
                behavior="padding"
                keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
                style={styles.container}
            >
                <Text style={styles.header}>
                    Welcome to Leave Portal
                </Text>
                <View style={{flex:1}}>
                <LottieView source={require('C:/Users/rreddy/OneDrive - RealPage/RPEM-RN/RPEM/assets/loginpageAnimation.json')} autoPlay loop />

                </View>
                <View style={styles.form}>
                    <Image
                        source={logoURL}
                        style={{
                            width: 300,
                            height: 100,
                            alignSelf: "center",
                            marginBottom: 10,
                        }}
                    />
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your username"
                        value={username}
                        onChangeText={setUsername}
                    />
                    {errors.username ? (
                        <Text style={styles.errorText}>{errors.username}</Text>
                    ) : null}

                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    {errors.password ? (
                        <Text style={styles.errorText}>{errors.password}</Text>
                    ) : null}
                    {errors.general ? (
                        <Text style={styles.errorText}>{errors.general}</Text>
                    ) : null}
                    <View style={styles.loginButton}>
                    <Button title="Login" color='#ff4f00' onPress={handleSubmit} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 25,
        padding: 20,
        // alignSelf:'center'
        textAlign:'center'
        // fontWeight: 'bold',

    },
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
        // backgroundColor: "#f5f5f5",
        backgroundColor:'#DCDEE6'
    },
    form: {
        backgroundColor: "#ffffff",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "bold",
    },
    input: {
        height: 40,
        borderColor: "#ddd",
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 5,
    },

    errorText: {
        color: "red",
        marginBottom: 10,
    },
    loginButton:{
        width:'50%',
        alignSelf:'center',
        padding:7
    }
});

export default LoginPage;