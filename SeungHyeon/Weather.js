import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import PropTypes from 'prop-types';

// export default class Weather extends Component{
//   render(){
//     return (
//       <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
//       <View style={styles.upper}>
//         <Ionicons color="white" size={121} name="ios-rainy"/>
//         <Text style={styles.temp}>35℃</Text>
//       </View>
//       <View style={styles.lower}>
//         <Text style={styles.title}>Raining like a MF</Text>
//         <Text style={styles.subtitle}>for more info look outside</Text>
//       </View>
//     </LinearGradient>
//     )
//   }
// }

const weatherCases = {
  Rain: {
    colors: ['#00C6FB', '#005BEA'],
    title: "Raining like a MF",
    subtitle: "For mor info look outside",
    iconName: 'weather-pouring'
  },
  Clear: {
    colors: ['#FEF253', '#FF7300'],
    title: "Sunny as fuck",
    subtitle: "Go get your ass burnt",
    iconName: 'weather-sunny'
  },
  Thunderstorm: {
    colors: ['#00ECBC', '#007ADF'],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house",
    iconName: 'weather-lightning'
  },
  Clouds: {
    colors: ['#D7D2CC', '#304352'],
    title: "Clouds",
    subtitle: "I know, fucking boring",
    iconName: 'weather-cloudy'
  },
  Snow: {
    colors: ['#89F7FE', '#66A6FF'],
    title: "Cold as balls",
    subtitle: "Do you want to build a snowman? Fuck no.",
    iconName: 'weather-snowy'
  },
  Drizzle: {
    colors: ['#00C6FB', '#005BEA'],
    title: "Drizzle",
    subtitle: "It's like rain, but gay",
    iconName: 'weather-rainy'
  },
  Haze: {
    colors: ['#D7D2DD', '#304373'],
    title: "Haze",
    subtitle: "비도 오고 그래서 니 생각이 났어",
    iconName: "weather-fog"
  },
  Mist: {
    colors: ['#E8D2CC', '#414350'],
    title: "Mist",
    subtitle: "Mist 챱챱",
    iconName: "weather-windy"
  }
}

function Weather({weatherName, temp}){
  return(
    <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
      <View style={styles.upper}>
        <MaterialCommunityIcons color="white" size={121} name={weatherCases[weatherName].iconName}/>
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  )
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:"transparent"
  },
  temp: {
    fontSize: 48,
    backgroundColor:'transparent',
    color: 'white',
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    backgroundColor:'transparent',
    color: 'white',
    marginBottom: 10,
    fontWeight: '200'
  },
  subtitle: {
    fontSize: 24,
    backgroundColor:'transparent',
    color: 'white',
    marginBottom: 50
  }
});