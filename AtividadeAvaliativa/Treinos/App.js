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

      <View style={styles.weeklySessions}>
        <Text style={styles.weeklySessions.text}>Seções por semana</Text>

        <View style={styles.weeklySessions.sessions}>
          <TouchableOpacity style={styles.weeklySessions.sessions.buttons} onPress={onPress}>
            <Text style={styles.weeklySessions.sessions.buttons.text}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.weeklySessions.sessions.buttons} onPress={onPress}>
            <Text style={styles.weeklySessions.sessions.buttons.text}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.weeklySessions.sessions.buttons} onPress={onPress}>
            <Text style={styles.weeklySessions.sessions.buttons.text}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.weeklySessions.sessions.buttons} onPress={onPress}>
            <Text style={styles.weeklySessions.sessions.buttons.text}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.weeklySessions.sessions.buttons} onPress={onPress}>
            <Text style={styles.weeklySessions.sessions.buttons.text}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.weeklySessions.sessions.buttons} onPress={onPress}>
            <Text style={styles.weeklySessions.sessions.buttons.text}>6</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.weeklySessions}>
        <Text style={styles.weeklySessions.text}>Duração do treino</Text>

        <View style={styles.weeklySessions.sessions}>
          <TouchableOpacity style={styles.weeklySessions.sessions.buttonDuration} onPress={onPress}>
            <Text style={styles.weeklySessions.sessions.buttons.text}>15</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.weeklySessions.sessions.buttonDuration} onPress={onPress}>
            <Text style={styles.weeklySessions.sessions.buttons.text}>20</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.weeklySessions.sessions.buttonDuration} onPress={onPress}>
            <Text style={styles.weeklySessions.sessions.buttons.text}>25</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.weeklySessions.sessions.buttonDuration} onPress={onPress}>
            <Text style={styles.weeklySessions.sessions.buttons.text}>30</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.start} onPress={onPress}>
        <Text style={styles.start.text}>Iniciar Treino</Text>
      </TouchableOpacity>

    </View>
);}

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
  
  containerImages: { // Container de imagens
    width: '100%',
    height: '50%',
    maxHeight: '350px',
    minHeight: '325px', 
    marginTop: '20px',
    borderWidth: '1.9px',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',

    line1: {
      width: '100%',
      height: '45%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: '15px'
    },

    line2: {
      width: '100%',
      height: '45%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
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
  },

  weeklySessions: { // Sessões por semana e duração dos treinos
    width: '100%',


    text: {
      fontSize: '18px',
      fontWeight: '500'
    },

    sessions: {
      width: '100%',
      marginTop: '5px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',

      buttons: {
        height: '30px',
        width: '30px',
        backgroundColor: 'rgba(0, 0, 255, 0.07)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgba(0, 0, 255, 0.4)',
        borderWidth: '1.7px',
        borderRadius: '5px',

        text: {
          fontWeight: '500',
          fontSize: '15px',
        }
      },

      buttonDuration: {
        height: '30px',
        width: '60px',
        backgroundColor: 'rgba(0, 0, 255, 0.07)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgba(0, 0, 255, 0.4)',
        borderWidth: '1.7px',
        borderRadius: '5px',
      }
    }
  },

  start: {
    width: '100%',
    marginTop: '15px',
    backgroundColor: 'rgba(0, 0, 255, 0.07)',
    textAlign: 'center',
    borderWidth: '1.7px',
    borderColor: 'rgba(0, 0, 255, 0.4)',
    borderRadius: '8px',

    text: {
      fontSize: '18px',
    }
  }




});
