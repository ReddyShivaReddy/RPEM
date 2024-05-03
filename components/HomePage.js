import React from 'react'
import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity, SafeAreaView,Image,StatusBar } from 'react-native'

function HomePage() {
    const logoURL = require('../assets/RealpageLogo.png');
    return (
        <View style={{ flex: 1,backgroundColor: '#DCDEE6'  }}>
            <StatusBar />
            <Text style={{textAlign:'center',justifyContent:'center',fontSize:30}}>Hello</Text>
        </View>
    )
}
export default HomePage