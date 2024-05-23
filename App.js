import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from "./assets/components/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{color:"white",fontSize:18}}>Domingo, 10 de Septiembre del 2024 </Text>
      </View>
     <Card></Card>
     <Card></Card>

      <StatusBar style="auto" />
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
