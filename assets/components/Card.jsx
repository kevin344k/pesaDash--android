import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { PieChart } from "react-native-gifted-charts";

/*data for pie chart*/
const pieData = [
  { value: 20, color: "#90D00F" },
  { value: 80, color: "#2d2c3a" },
];

const Card = () => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.containerTitleCard}>
        <Text style={{color:"white",fontWeight:"bold"}}>Bodega rollos FOAM</Text>
      </View>

      <PieChart
        donut
        /*gradientes */
        gradientCenterColor={"black"}
        showGradient
        /*bordes externos */
        strokeWidth={1}
        strokeColor="#313249"
        /*borde interno */
        innerCircleColor={"#2d2c3a"}
        innerCircleBorderWidth={1}
        /*color del background del texto dentro del grafico */
        innerCircleBorderColor="#2d2c3a"
        innerRadius={99}
        data={pieData}
        centerLabelComponent={() => {
          return (
            <View style={styles.containerNumber}>
              <Text style={styles.titleNumber}>
                {`${pieData[0].value}%`}
              </Text>
              <Text style={styles.subTitleNumber}>Ocupado</Text>
            </View>
          );
        }}
      />

    </View>

  );
};

export default Card;

const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: "#2d2c3a",
    width: "90%",
    padding: 18,
    paddingTop:50,
    borderRadius: 10,

    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.3,

    elevation: 30,
  },
  containerTitleCard:{
    backgroundColor:"#FF7669",
    width:"50%",
    position:"absolute",
    left:0,
    top:0,
    padding:12,
    borderTopLeftRadius:10,
    borderBottomRightRadius:20,
   
  },

  containerNumber:{
    alignItems:"center",
  },titleNumber:{
    fontSize:50,
    color: "white",
  },subTitleNumber:{
    color: "white",

    fontSize:20,
  }

});
