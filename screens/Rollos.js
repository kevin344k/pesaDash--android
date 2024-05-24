import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from "expo-router";

export default function Rollos() {


const {slug}=useLocalSearchParams()


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{color:"white",fontSize:18}}>Rollos:{slug}</Text>
      </View>
   

  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262424',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  header:{
    width:"90%"
  }
});
