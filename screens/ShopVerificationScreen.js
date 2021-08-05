import React from 'react';
import {Text, View } from 'react-native';
import FooterPolicy from '../components/policy'; 
import {styles} from '../css/style.js';
 

export default function ShopVerificationScreen({navigation}) {
    return (
      <View style={styles.container} >
      <View style={styles.main}>
        <View style={styles.card}>
          <View style={styles.heading ,{marginBottom:50}}>
            <Text style={{fontSize:24 }}>
              Shop Verification
            </Text> 
          </View>
          <View style={styles.heading}>
            <Text style={{fontSize:22,textAlign:'center' }}>
             Your shop detail are save from
             bringonstore server(India) 
             our member will get to your shop  
             to verify document and verify your
             shop
            </Text>
          </View>
          <View style={styles.heading,{marginTop:70}}>
            <Text style={{fontSize:22 ,}}>
            Your Verification Code is <Text style={{color:"#DC143C"}}>
             5892
            </Text>
            </Text>   
          </View>
        </View>
      </View>
      <View style={{bottom:80}}>
          <Text style={{fontSize:16,color:"#DC143C"}}>
             Note : it will take 2 to 4 Hours to Verify
            </Text> 
      </View>
      <FooterPolicy />
    </View>     
    );
}

  