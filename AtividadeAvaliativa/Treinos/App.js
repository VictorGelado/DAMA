import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
//import img1 from './src/img/image-1.jpg';

export default function App() {

  function onPress() {
    console.log('Teste');
  }

  return (
    <View style={styles.container}>

      <View style={styles.containerTitle}>
        <Text style={styles.containerTitle.title}>Meu treino</Text>
      </View>

      <View style={styles.buttonsDifficulty}>
        <TouchableOpacity style={styles.buttonsDifficulty.button} onPress={onPress}>
          <Text style={styles.buttonsDifficulty.button.text}>Fácil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonsDifficulty.button} onPress={onPress}>
          <Text style={styles.buttonsDifficulty.button.text}>Médio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonsDifficulty.button} onPress={onPress}>
          <Text style={styles.buttonsDifficulty.button.text}>Difícil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerImages}>
        
        <View style={styles.containerImages.line1}>
          <View style={styles.containerImages.blockImg}>
            <Image
              source={require('./src/img/img-1.jpg')}
              style={styles.containerImages.imgs}
            />
          </View>

          <View style={styles.containerImages.blockImg}>
            <Image
              source={require('./src/img/img-2.jpg')}
              style={styles.containerImages.imgs}
            />
          </View>
        </View>
        
        <View style={styles.containerImages.line2}>
          <View style={styles.containerImages.blockImg}>
            <Image
              source={require('./src/img/img-3.jpg')}
              style={styles.containerImages.imgs}
            />
          </View>

          <View style={styles.containerImages.blockImg}>
            <Image
              source={require('./src/img/img-4.jpg')}
              style={styles.containerImages.imgs}
            />
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { // Tela do celular
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: '5px',
    paddingHorizontal: '25px'
  },

  containerTitle: { // Title 
    width: '100%',

    title: {
      fontSize: '18px',
      fontWeight: 'bolder'
    }
  },

  buttonsDifficulty: { // Botões de dificuldades
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    button: {
      width: '50px',
      height: '25px',
      borderWidth: '1.7px',
      borderColor: 'rgba(0, 0, 255, 0.4)',
      backgroundColor: 'rgba(0, 0, 255, 0.07)',
      textAlign: 'center',
      borderRadius: '4px',

      text: {
        fontSize: '15px',
      }
    }
  },

  containerImages: {
    width: '100%',
    height: '50%',
    marginTop: '20px',
    borderWidth: '1.9px',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',

    line1: {
      width: '100%',
      height: '45%',
      display: 'flex',
      flexDirection: 'row',
      gap: '15px'
    },

    line2: {
      width: '100%',
      height: '45%',
      display: 'flex',
      flexDirection: 'row',
      gap: '15px'
    },

    blockImg: {
      width: '45%',
      height: '100%',
      borderWidth: '1.7px',
      borderColor: 'rgba(0, 0, 255, 0.4)',
      backgroundColor: 'rgba(0, 0, 255, 0.03)',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    imgs: {
      width: '85%',
      height: '85%',
    }
  }



});
