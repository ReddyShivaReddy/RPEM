import { View, Text } from 'react-native'
import React from 'react'

const AboutUs = () => {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      {/* <Text>Terms and conditions</Text> */}
      {/* <Text>Privacy policy</Text> */}
      <View style={{marginTop:10,gap:10}}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center',marginBottom:10,textDecorationLine:'underline' }}>AGREEMENT TO TERMS</Text>
        
          <Text style={{ marginHorizontal: 15}}>We are Termly Inc., doing business as Termly (“Termly,” “we,” “us,” or “our”), a company registered in the State of Delaware. We operate the website https://realpage.com (the “Website”) through which we provide you our services, (collectively, the “Services” which include the provision and use of the Website).</Text>
          <Text style={{ marginHorizontal: 15}}>These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and concerning your access to and use of the Website and the Services. You agree that by accessing the Services, you have read, understood, and agree to be bound by all of these Terms of Use.</Text>
<Text style={{ marginHorizontal: 15,fontWeight:'bold'}}> IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </Text>
            <Text style={{ marginHorizontal: 15,}}>Supplemental terms and conditions or documents that may be posted on the Website from time to time are hereby expressly incorporated herein by reference. We reserve the right, in Termly’s sole discretion, to make changes or modifications to these Terms of Use from time to time. We will alert you about any changes by updating the “Last updated” date of these Terms of Use, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms of Use to stay informed as each time you access the Services, you will be subject to, and will be deemed to have been made aware of and to have accepted, the then applicable Terms of Use.
            The Services are intended for business users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.</Text>
       
      </View>

    </View>
  )
}

export default AboutUs