import { View, Text, Linking, Image,Dimensions } from 'react-native'
import React from 'react'
const { width } = Dimensions.get('window');
const Photos = () => {
    return (
        <View style={{backgroundColor:'white',flex:1}}>
            <View style={{alignSelf:'center',marginTop:0}}>
                <Image source={require('../assets/doodle.webp')} style={{ width: 400, height: 400 }} />
            </View>
            <View style={{ paddingHorizontal: 10,marginTop:50,marginHorizontal:30 }}>
                <Text style={{ fontSize: 20,fontWeight:'bold' }}>Please Access Event photos using below link</Text>
                <Text style={{ textDecorationLine: 'underline', fontSize: 22, color: 'blue',textAlign:'center' }} onPress={() => Linking.openURL('https://realpage.sharepoint.com/teams/RealPageIndiaAnnouncements2/Shared%20Documents/Forms/AllItems.aspx?FolderCTID=0x0120005053AE1BAF8DAF45BA82F6D51F561C7F&id=%2Fteams%2FRealPageIndiaAnnouncements2%2FShared%20Documents%2FGeneral%2FEvents%5FPics%2FIndia%20ERGs%2FMeraki')}>
                    Event Photos
                </Text>
            </View>
        </View>
    )
}

export default Photos