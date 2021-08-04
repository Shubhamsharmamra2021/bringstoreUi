import React from 'react';
import { Image, Text, View} from 'react-native';
import FooterPolicy from '../components/policy';
import MainButton from '../components/Button';
import {styles} from '../css/style.js';
import InputField from '../components/InputField';


export default function ProfileName({navigation}) {
    return (
      <View style={styles.container} >
        <View style={styles.main}>
          <View style={styles.card}>
            <View style={styles.heading}>
            <Image
                style={{width:26, height:26}}
                source={require('../assets/images/basket.png')}
              /> 
               
              <Text style={styles.headh3}>
                Enter Your Shop Detail 
              </Text>
            </View>
            <View style={styles.inputIcon}>
            
              <InputField
              placeholder="Aadhar Number"
             />
              <InputField
              placeholder="Pan Number"
             />
              <InputField
              placeholder="GST Number"
             />
             </View>
             <View style={{marginBottom:75}}>
                <Text style={{fontSize:16}}>
                    Aadhar & Pancard Upload Front & Back
                </Text>
            </View>
            <MainButton
                NextPage="SelectCategory"

            />
            
            
          </View>
        </View>
        <FooterPolicy />
      </View>
    );
}

  