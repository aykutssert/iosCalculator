import { View, StyleSheet, TouchableOpacity, Text ,Vibration} from "react-native";
import { useState } from "react";
import { Entypo } from '@expo/vector-icons';

const Calculator = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  function calculator() {
    
    let lastArr = currentNumber[currentNumber.length-1];
    
    if(lastArr === '/' || lastArr === '*' || lastArr === '-' || lastArr === '+' || lastArr === '.') {
      setCurrentNumber(currentNumber)
      setLastNumber('')
      return
    }
    else {
      let result = eval(currentNumber).toString();
      setCurrentNumber(result)
      return
    }
  }

  function handleInput(buttonPressed) {
    if(buttonPressed  === '+' || buttonPressed === '-' || buttonPressed === '*' || buttonPressed === '/') {
      Vibration.vibrate(35);
      setCurrentNumber(currentNumber + buttonPressed)
      return
    }
    else if (buttonPressed === 1 || buttonPressed === 2 || buttonPressed === 3 || buttonPressed === 4 || buttonPressed === 5 ||
            buttonPressed === 6 || buttonPressed === 7 || buttonPressed === 8 || buttonPressed === 9 || buttonPressed === 0 || buttonPressed === '.' ) {
      Vibration.vibrate(35);
    }
    switch(buttonPressed) {
      case 'DEL':
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)))
        return
      case 'C':
        Vibration.vibrate(35);
        setLastNumber('')
        setCurrentNumber('')
        return
      case '=':
        Vibration.vibrate(35);
        setLastNumber(currentNumber + '=')
        calculator()
        return
    }
    setCurrentNumber(currentNumber + buttonPressed)
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: darkMode ? 'black' : 'white',
    },
    results:{
      height:'40%',
      width:'100%',
      alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
  
    columnContainer: {
      flexDirection: "column", // Changed to column
      height:'60%',
      width:'100%'
      
    },
    rowContainer: {
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "center",
    },
    light: {
      backgroundColor: "lightgrey",
      width: 80,
      height: 80,
      borderRadius: 100,
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      margin:10
    },
    gray: {
      backgroundColor: "grey",
      width: 80,
      height: 80,
      borderRadius: 100,
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      margin:10
    },
    yellow: {
      backgroundColor: "orange",
      width: 80,
      height: 80,
      borderRadius: 100,
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      margin:10
    },
    zero:{
      backgroundColor: "grey",
      width: 180,
      height: 80,
      borderRadius: 100,
      alignItems:"flex-start",
      justifyContent:"center",
      margin:10
    },
    text:{
      fontWeight:"bold",
      fontSize:30,
      color:'white'
    },
    themeButton: {
      alignSelf: 'flex-start',
      margin: 15,
      backgroundColor: darkMode ? '#7b8084' : '#e5e5e5',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    resultText: {
      maxHeight: 45,
      color: darkMode?'white':'black',
      margin: 15,
      fontSize: 35,
    },
    historyText: {
      color: darkMode ? '#B5B7BB' : '#7c7c7c',
      fontSize: 20,
      marginRight: 10,
      alignSelf: 'flex-end',
    },

    })
    return (
      <View style={styles.container}>
        <View style={styles.results}>
        <TouchableOpacity style={styles.themeButton}>
            <Entypo name={darkMode ? 'light-up' : 'moon'} size={24} color={darkMode ? 'white' : 'black'} onPress={() => darkMode ? setDarkMode(false) : setDarkMode(true)}/>
          </TouchableOpacity>
          <Text style={styles.historyText}>{lastNumber}</Text>
          <Text style={styles.resultText}>{currentNumber}</Text>
        </View>
        <View style={styles.columnContainer}>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={[styles.light,{width:130}]} onPress={() => handleInput('C')}>
              <Text style={[styles.text,{ color: "black"}]}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.light,{width:130}]} onPress={() => handleInput('DEL')}>
              <Text style={[styles.text,{ color: "black"}]}>DEL</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.yellow} onPress={() => handleInput('/')}>
              <Text style={styles.text}>/</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.gray} onPress={() => handleInput(7)}>
              <Text style={styles.text}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gray} onPress={() => handleInput(8)}>
              <Text style={styles.text}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gray} onPress={() => handleInput(9)}>
              <Text style={styles.text}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.yellow} onPress={() => handleInput('*')}>
              <Text style={styles.text}>*</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.gray} onPress={() => handleInput(4)}>
              <Text style={styles.text}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gray} onPress={() => handleInput(5)}>
              <Text style={styles.text}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gray} onPress={() => handleInput(6)}>
              <Text style={styles.text}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.yellow} onPress={() => handleInput('-')}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.gray} onPress={() => handleInput(1)}>
              <Text style={styles.text}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gray} onPress={() => handleInput(2)}>
              <Text style={styles.text}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gray} onPress={() => handleInput(3)} >
              <Text style={styles.text} >3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.yellow} onPress={() => handleInput('+')}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.zero} onPress={() => handleInput(0)}>
              <Text style={[ {marginLeft:30, },styles.text]}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gray} onPress={() => handleInput('.')}>
              <Text style={styles.text}>,</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gray} onPress={() => handleInput('=')}>
              <Text style={styles.text}>=</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    );
  }



export default Calculator;
