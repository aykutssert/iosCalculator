import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Entypo } from '@expo/vector-icons';

const Calculator = () => {

  const buttons = ['C','DEL','/',
                    7,8,9,'*',
                    4,5,6,'-',
                    1,2,3,'+',
                    0,'.','='
                  ]
  return (
    <View style={styles.container}>
      <View style={styles.columnContainer}>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.light}>
            <Text style={[{ color: "black"},styles.text]}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.light}>
            <Text style={[{ color: "black"},styles.text]}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.light}>
            <Text style={[{ color: "black"},styles.text]}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.yellow}>
            <Text style={[{ color: "white"},styles.text]}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.gray}>
            <Text style={[{ color: "white"},styles.text]}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gray}>
            <Text style={[{ color: "white"},styles.text]}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gray}>
            <Text style={[{ color: "white"},styles.text]}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.yellow}>
            <Text style={[{ color: "white"},styles.text]}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.gray}>
            <Text style={[{ color: "white"},styles.text]}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gray}>
            <Text style={[{ color: "white"},styles.text]}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gray}>
            <Text style={[{ color: "white"},styles.text]}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.yellow}>
            <Text style={[{ color: "white"},styles.text]}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.gray}>
            <Text style={[{ color: "white"},styles.text]}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gray}>
            <Text style={[{ color: "white"},styles.text]}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gray}>
            <Text style={[{ color: "white"},styles.text]}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.yellow}>
            <Text style={[{ color: "white"},styles.text]}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.zero}>
            <Text style={[ {color: "white",marginLeft:30, },styles.text]}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gray}>
            <Text style={[{ color: "white"},styles.text]}>,</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gray}>
            <Text style={[{ color: "white"},styles.text]}>=</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "black",
  },
  columnContainer: {
    flexDirection: "column", // Changed to column
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
    fontSize:30
  }
});

export default Calculator;
