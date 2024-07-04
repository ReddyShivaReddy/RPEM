import { View, Text,Linking } from 'react-native'
import React from 'react'

const Photos = () => {
    return (
        <View style={{paddingHorizontal:10}}>
            <Text style={{fontSize:17}}>Please Access Event photos using below link</Text>
            <Text style={{textDecorationLine:'underline',fontSize:17,color:'blue'}} onPress={() => Linking.openURL('https://realpage.sharepoint.com/teams/RealPageIndiaAnnouncements2/Shared%20Documents/Forms/AllItems.aspx?FolderCTID=0x0120005053AE1BAF8DAF45BA82F6D51F561C7F&id=%2Fteams%2FRealPageIndiaAnnouncements2%2FShared%20Documents%2FGeneral%2FEvents%5FPics%2FIndia%20ERGs%2FMeraki')}>
                Event Photos
            </Text>
        </View>
    )
}

export default Photos