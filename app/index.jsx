import {Text , View , StyleSheet , Image , ImageBackground , TouchableOpacity } from 'react-native';
import startimg from '@/assets/images/index_screen.svg.png'
import logo from '@/assets/images/logo_fridgeviscum.svg.png'
import {styled} from 'nativewind'



const App = () => {
  return (
    <View className="flex-1">
      {/* Background Image */}
      <ImageBackground source={startimg} className="flex-1 w-full h-full">
        {/* Overlay */}
        <View className="absolute inset-0 bg-black/50 flex justify-center items-center gap-6">
          <Text className="text-white text-2xl font-bold mb-5">
            Hello there mate!
          </Text>

          {/* Button Container */}
          <View className="bg-gradient-to-b from-gray-800/40 to-transparent p-[4px] rounded-[16px]">
            <TouchableOpacity className="group p-[4px] rounded-[12px] bg-gradient-to-b from-gray-700 to-gray-600 shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200">
              <View className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-[8px] px-3 py-2 flex-row items-center">
                <Text className="font-semibold text-white">Get Started</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;