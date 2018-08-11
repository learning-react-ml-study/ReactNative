import React, {component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {LinearGranient} from "expo";
import{Ionicons} from "@expo/vector-icons";
import PropTypes from "prop-types";

// export default class Weather extends Component{
//     render(){
//         retrun(
//         <linearGradient colors={["#00c6fb","#005bea"]} style={StyleSheet.container}>
//             <View style={styles.upper}>
//                 <Ionicons color="white" size={144} name="ios-rainy"/>
//                 <Text style={styles.temp}></Text>
//             </View>
//             <View style={styles.lower}>
//                 <Text style={styles.title}></Text>
//                 <Text style={styles.subtitle}></Text>
//             </View>
//         </linearGradient>
//         );
//     }
// }

const weatherCases = {
    Rain: {
      colors: ["#00C6FB", "#005BEA"],
      title: "Raining like a MF",
      subtitle: "For more info look outside",
      icon: "ios-rainy"
    },
    Clear: {
      colors: ["#FEF253", "#FF7300"],
      title: "Sunny as fuck",
      subtitle: "Go get your ass burnt",
      icon: "ios-sunny"
    },
    Thunderstorm: {
      colors: ["#00ECBC", "#007ADF"],
      title: "Thunderstorm in the house",
      subtitle: "Actually, outside of the house",
      icon: "ios-thunderstorm"
    },
    Clouds: {
      colors: ["#D7D2CC", "#304352"],
      title: "Clouds",
      subtitle: "I know, boring",
      icon: "ios-cloudy"
    },
    Snow: {
      colors: ["#7DE2FC", "#B9B6E5"],
      title: "Cold as balls",
      subtitle: "Do you want to build a snowman?",
      icon: "ios-snow"
    },
    Drizzle: {
      colors: ["#89F7FE", "#66A6FF"],
      title: "Drizzle",
      subtitle: "Is like rain",
      icon: "ios-rainy-outline"
    },
    Haze: {
      colors: ["#89F7FE", "#66A6FF"],
      title: "Haze",
      subtitle: "Don't know",
      icon: "ios-rainy-outline"
    }
  };

function Weather({ weatherName, temp }) {
    return (
      <LinearGradient
        colors={weatherCases[weatherName].colors}
        style={styles.container}
      >
        <View style={styles.upper}>
          <MaterialCommunityIcons
            color="white"
            size={144}
            name={weatherCases[weatherName].icon}
          />
          <Text style={styles.temp}>{temp}º</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
          <Text style={styles.subtitle}>
            {weatherCases[weatherName].subtitle}
          </Text>
        </View>
      </LinearGradient>
    );
  }

  Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
  };
  
  export default Weather;

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    upper: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent"
    },
    temperature: {
      fontSize: 48,
      color: "white",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent"
    },
    temp: {
      fontSize: 48,
      backgroundColor: "transparent",
      color: "white",
      marginTop: 10
    },
    lower: {
      flex: 1,
      alignItems: "flex-start",
      justifyContent: "flex-end",
      paddingRight: 25
    },
    title: {
      fontSize: 38,
      backgroundColor: "transparent",
      color: "white",
      marginBottom: 10,
      fontWeight: "300"
    },
    subtitle: {
      marginBottom: 100,
      backgroundColor: "transparent",
      color: "white",
      fontSize: 24,
    }
  });