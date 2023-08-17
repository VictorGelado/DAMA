import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}> {/* Texto app */ }
        <Text style={{fontSize: "25px", textAlign: "center"}}>App</Text>
      </View>

      <View style={styles.containerTwoSquare}> {/* Dois quadrados */ }
        <View style={styles.containerTwoSquare.SquareOne}></View>
        <View style={styles.containerTwoSquare.SquareTwo}></View>
      </View>
      
      <View style={styles.containerSquare}> {/* Um quadrado */ }
        <View style={styles.containerSquare.squareGreen}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { // Tela do celular
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },

  containerText: { // Texto 1'App'
    width: "100%",
    height: "45px",
    borderColor: "#000",
    borderWidth: "2px",
    marginTop: "5px"
  },

  containerTwoSquare: { // Container com dois quadrados
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    SquareOne: {
      width: "55px",
      height: "55px",
      backgroundColor: "rgba(255, 0, 0, 0.54)",
      borderWidth: "2px",
      borderColor: "#ff0000"
    },

    SquareTwo: {
      width: "55px",
      height: "55px",
      backgroundColor: "rgba(0, 0, 255, 0.3)",
      borderWidth: "2px",
      borderColor: "#0000ff"
    }
  },

  containerSquare: { // Container um quadrado
    width: "100%",
    display: "flex",
    alignItems: "center",

    squareGreen: { // Quadrado
      width: "55px",
      height: "55px",
      backgroundColor: "rgba(0, 255, 0, 0.3)",
      borderWidth: "2px",
      borderColor: "#00ff00"
    }
  }
  
});
