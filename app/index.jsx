import {Text , View , StyleSheet , Image , ImageBackground , TouchableOpacity } from 'react-native';
import startimg from '@/assets/images/index_screen.svg.png'
import logo from '@/assets/images/logo_fridgeviscum.svg.png'

const App = () => {
    return (
      <View style={styles.container}>
        {/* Background Image */}
        <ImageBackground source={startimg} style={styles.backgroundImage} resizeMode="cover">
          {/* Semi-Transparent Overlay */}
          <View style={styles.overlay}>
            <Text style={styles.text}>Start Creating Delicious Food !</Text>
  
            {/* Buttons */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Button 1</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Button 2</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject, // Makes it cover the whole image
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#ffffff',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      marginVertical: 10,
    },
    buttonText: {
      fontSize: 18,
      color: '#000',
      fontWeight: 'bold',
    },
  });
  
  export default App;