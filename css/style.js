import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent: 'center',

      },
  
      main: {
         
         textAlign:"center",
       },
      card:{
        width:"100%",
        height:"100%",
        alignItems:"center",
        backgroundColor:"#fff",
        overflow:"hidden",
        padding:25,
         height:"100%"
      },
  
      heading:{  
         fontSize:15,
        flexDirection:"row"
  
      },
      headimg:{
        alignItems:"center",
        width: 30,
        height: 22,
        marginTop:5,
      
      },
      headh3:{
        fontWeight:"600",
        fontSize:22,
        lineHeight:30,
        marginLeft:7,
        textAlign:"center",
      },
        
    mainbuttonMobile:{
        marginTop:40,
        marginLeft:20,
         alignItems:"center"
       },
     
      touchButtonMobile:{
        borderRadius:10,
         marginLeft:-40,
         backgroundColor:"#fff",
        padding:10,
        alignItems:"center",
       // border:"none",
        paddingBottom:3,
        paddingTop:3,
        paddingRight:10,
        paddingLeft:10,
        elevation:100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
      },
      touchButtonMail:{
        borderRadius:10,
        marginLeft:10,
        backgroundColor:"#fff",
        padding:10,
        alignItems:"center",
        paddingBottom:7,
        paddingTop:7,
        paddingRight:3,
        paddingLeft:3,
        elevation:100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
      },
      mobileactive:{
        borderRadius:10,
        marginLeft:-40,
        backgroundColor:"#DC143C",
       padding:10,
       alignItems:"center",
      // border:"none",
       paddingBottom:3,
       paddingTop:3,
       paddingRight:10,
       paddingLeft:10,
       elevation:100,
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 1 },
       shadowOpacity: 0.5,
       shadowRadius: 5,        
       },
     mailactive:{
       
      borderRadius:10,
      marginLeft:10,
      backgroundColor:"#DC143C",
      padding:10,
      alignItems:"center",
      paddingBottom:7,
      paddingTop:7,
      paddingRight:3,
      paddingLeft:3,
      elevation:100,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 5, 
     },
       inputIcon:{
        width:"100%",
        marginBottom:35,
        marginTop:10,
        textAlign:"center"
      },
      inputField:{
         width:300,
         marginTop:20,
 
         padding:10,
        paddingLeft:30,
        fontSize:16,
        borderWidth:0,
     //   outlineWidth: 0,
        borderColor:"#cccccc",
        backgroundColor:"#ffffff",
        color:"#000000",
        borderStyle:"solid",
        borderRadius:23,
        elevation:100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
  
      },
       
      inputIconOtp:{
        width:"100%",
        marginBottom:50,
        marginTop:40,
        marginLeft:0,
        textAlign:"center",
        flexDirection:"row"
      },
      inputOtp:{
          width:50,
          height:50,
          marginLeft:20,
          fontSize:30,
          textAlign:'center',
         // outlineWidth: 0,
          borderColor:"#cccccc",
          backgroundColor:"#ffffff",
          color:"#000000",
            borderStyle:"solid",
          borderRadius:10,
          elevation:100,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.5,
          shadowRadius: 5, 
      

      },
      inputFieldMobile:{
        width:300,
        padding:10,
        paddingLeft:50,
        fontSize:16,
        borderWidth:0,
       // outlineWidth: 0,
        borderColor:"#cccccc",
        backgroundColor:"#ffffff",
        color:"#000000",
        borderStyle:"solid",
        borderRadius:23,
        elevation:100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
    
      },
       
      mainButton:{
      width:300,
      color:"#ffffff",
      textAlign:"center",
      fontSize:18,
      borderRadius:50,
      backgroundColor:"#DC143C",
      paddingTop:7,
      paddingBottom:7,
      paddingLeft:20,
      paddingRight:20,
     // border:"none",
    },

    categeryButton:{

      borderRadius:10,
      marginLeft:10,

      width:100,
      height:30,
      padding:5,
      margin:10,
      alignItems:"center", 
      elevation:100,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
    }
     
  //   container: {
  //     flex: 1,
  //     backgroundColor: '#fff',
  //     alignItems:'center',
  //     justifyContent: 'center',
  //   },

  //   main: {
  //      top:"20%",
  //      textAlign:"center",
  //    },
  //   card:{
  //     width:"100%",
  //     height:"100%",
  //     alignItems:"center",
  //     backgroundColor:"#fff",
  //     overflow:"hidden",
  //     padding:25,
  //      height:"100%"
  //   },

  //   heading:{
  //      fontSize:15,
  //     flexDirection:"row"

  //   },
  //   headimg:{
  //     alignItems:"center",
  //     width: 30,
  //     height: 22,
  //     marginTop:5,
    
  //   },
  //   headh3:{
  //     fontWeight:"600",
  //     fontSize:22,
  //     lineHeight:30,
  //     marginLeft:7
  //   },
      
  // mainbuttonMobile:{
  //     marginTop:40 ,
  //     marginLeft:20,
  //      alignItems:"center"
  //    },
   
  //   touchButtonMobile:{

  //     borderRadius:10,
  //     marginLeft:-40,
  //     backgroundColor:"#fff",
  //    padding:10,
  //    alignItems:"center",
  //   // border:"none",
  //    paddingBottom:3,
  //    paddingTop:3,
  //    paddingRight:10,
  //    paddingLeft:10,
  //    elevation:100,
  //    shadowColor: '#000',
  //    shadowOffset: { width: 0, height: 1 },
  //    shadowOpacity: 0.5,
  //    shadowRadius: 5, 
  //   },
  //   touchButtonMail:{
  //     borderRadius:10,
  //     marginLeft:10,
  //     backgroundColor:"#fff",
  //     padding:10,
  //     alignItems:"center",
  //     paddingBottom:7,
  //     paddingTop:7,
  //     paddingRight:3,
  //     paddingLeft:3,
  //     elevation:100,
  //     shadowColor: '#000',
  //     shadowOffset: { width: 0, height: 1 },
  //     shadowOpacity: 0.5,
  //     shadowRadius: 5, 
  //   },
  //   mobileactive:{
  //     borderRadius:10,
  //     marginLeft:-40,
  //     backgroundColor:"#DC143C",
  //    padding:10,
  //    alignItems:"center",
  //   // border:"none",
  //    paddingBottom:3,
  //    paddingTop:3,
  //    paddingRight:10,
  //    paddingLeft:10,
  //    elevation:100,
  //    shadowColor: '#000',
  //    shadowOffset: { width: 0, height: 1 },
  //    shadowOpacity: 0.5,
  //    shadowRadius: 5,        
  //    },
  //  mailactive:{
     
  //   borderRadius:10,
  //   marginLeft:10,
  //   backgroundColor:"#DC143C",
  //   padding:10,
  //   alignItems:"center",
  //   paddingBottom:7,
  //   paddingTop:7,
  //   paddingRight:3,
  //   paddingLeft:3,
  //   elevation:100,
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 1 },
  //   shadowOpacity: 0.5,
  //   shadowRadius: 5, 
  //  },
  //    inputIcon:{
  //     width:"100%",
  //     marginBottom:35,
  //     marginTop:10,
  //     textAlign:"center"
  //   },
  //   inputField:{
  //     width:300,
  //     marginTop:20,
  //     padding:10,
  //     paddingLeft:30,
  //     fontSize:16,
  //     borderWidth:0,
  //    // outlineWidth: 0,
  //     borderColor:"#cccccc",
  //     backgroundColor:"#ffffff",
  //     color:"#000000",
  //     borderStyle:"solid",
  //     borderRadius:23,
  //     elevation:100,
  //     shadowColor: '#000',
  //     shadowOffset: { width: 0, height: 1 },
  //     shadowOpacity: 0.5,
  //     shadowRadius: 5, 

  //   },
     
  //   inputIconOtp:{
  //     width:"100%",
  //     marginBottom:50,
  //     marginTop:40,
  //     marginLeft:50,
  //     textAlign:"center",
  //     flexDirection:"row"
  //   },
  //   inputOtp:{
  //       width:50,
  //       height:50,
  //       marginLeft:20,
  //       fontSize:30,
  //       textAlign:'center',
  //      // outlineWidth: 0,
  //       borderColor:"#cccccc",
  //       backgroundColor:"#ffffff",
  //       color:"#000000",
  //       borderStyle:"solid",
  //       borderRadius:10,
  //       elevation:100,
  //       shadowColor: '#000',
  //       shadowOffset: { width: 0, height: 1 },
  //       shadowOpacity: 0.5,
  //       shadowRadius: 5, 
    

  //   },
  //   inputFieldMobile:{
  //     width:300,
  //     padding:10,
  //     paddingLeft:50,
  //     fontSize:16,
  //     borderWidth:0,
  //    // outlineWidth: 0,
  //     borderColor:"#cccccc",
  //     backgroundColor:"#ffffff",
  //     color:"#000000",
  //     borderStyle:"solid",
  //     borderRadius:23,
  //     elevation:100,
  //     shadowColor: '#000',
  //     shadowOffset: { width: 0, height: 1 },
  //     shadowOpacity: 0.5,
  //     shadowRadius: 5, 
  
  //   },
     
  //   mainButton:{
  //   width:300,
  //   color:"#ffffff",
  //   textAlign:"center",
  //   fontSize:18,
  //   borderRadius:50,
  //   backgroundColor:"#DC143C",
  //   paddingTop:7,
  //   paddingBottom:7,
  //   paddingLeft:20,
  //   paddingRight:20,
  //  // border:"none",
  //  }
   
  });
