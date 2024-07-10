import { View, Text, StatusBar, ScrollView, Button, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'

const Community = () => {
    return (

        <View>
            <StatusBar />
            <Text>Feed</Text>
            <ScrollView>
                <View>
                    <Text>
                        Person who posted
                    </Text>
                    <Text>Time when he posted</Text>
                    <Text>His thoughts</Text>
                    <View>
                        // Images(single / multiple)
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Community