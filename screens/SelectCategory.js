import React,{useState} from 'react';
import { Image, Text, View,TextInput,Button,TouchableOpacity } from 'react-native';
 import FooterPolicy from '../components/policy';
 import {styles} from '../css/style.js';

export default function SelectCategory({navigation}) {
    const [bgcolor, setbgcolor] = useState("red")
 const pressClothes =()=>{
      setbgcolor("green")
    }
    return (
      <View style={styles.container} >
        <View style={styles.main}>
          <View style={styles.card}>
            <View style={styles.heading}>
              <Text style={styles.headh3}>
                Select Category 
              </Text>
            </View>
             
            <View style={ {marginTop:30,marginBottom:30,flexDirection:"row",}}>
                <View style={{margin:20 }}>
                  <TouchableOpacity style={styles.categeryButton} >
                      <Text >Clothes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.categeryButton} >
                      <Text >Food</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.categeryButton} >
                      <Text >Digital Shop</Text>
                  </TouchableOpacity>
                </View>
                <View style={{margin:20 }}>
                  <TouchableOpacity style={styles.categeryButton} >
                      <Text >Mobile</Text>
                  </TouchableOpacity> 
                  <TouchableOpacity style={styles.categeryButton}  >
                      <Text >Grocery</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.categeryButton} >
                      <Text >ShowRoom</Text>
                  </TouchableOpacity>           
                </View>  
                         
            </View>
            <View  >
            <TouchableOpacity >
              <Text  style={styles.mainButton}  onPress={() =>navigation.navigate("ShopVerificationScreen")}>Save</Text>
             </TouchableOpacity>
             
            </View>
          </View>
        </View>
        <FooterPolicy />
      </View>
    );
}
 
  