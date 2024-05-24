import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Link } from 'react-native';
import Card from "./assets/components/Card";
import { Link } from 'expo-router';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{color:"white",fontSize:18}}>Domingo, 10 de Septiembre del 2024 </Text>
      </View>
     <Card></Card>
     <Card></Card>
     <Link href="/routes/Rollos/Rollos.js">About</Link>
      <StatusBar style="light" backgroundColor='black' />
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
