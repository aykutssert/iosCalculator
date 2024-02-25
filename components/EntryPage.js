import { Button, View,StyleSheet ,Text,TouchableOpacity} from "react-native";
import React from 'react';

const EntryPage = ({navigation}) => {

    
    
    const handleCalculatorPress = () => {
        navigation.navigate('Calculator');
      };


    return (
    <View style={styles.Container}>
        
        <TouchableOpacity style={styles.buttonContainer} onPress={handleCalculatorPress}>
        <Text style={styles.button}>Calculator</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.button}>To Do</Text>
      </TouchableOpacity>
     
      
    </View>

    );


}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"black",
        alignItems:"center",
        justifyContent:"center"
    },
    button:{
        color:"black",
        fontWeight:"bold",
        textAlign: 'center',
    },
    buttonContainer:{
        padding:20,
        backgroundColor:"white",
        marginBottom:10,
        borderRadius:10,
    }
    
})
export default EntryPage;