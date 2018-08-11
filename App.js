import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';
import Weather from './Weather.js';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

const API_KEY = "7a86dd7996fa8412b4dec89220cd8353";

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error:error
        })
      }
    );
  }
  _getWeather = (lat,long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`).then(response => response.json()).then(json => {
      this.setState({
        temperature:json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      })
    })
  }
  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        
         {isLoaded ? <Weather weatherName={name} temp={Math.ceil(temperature - 273.15)}/> : <View style={styles.loading}>
          <Text style={styles.loadingText}>Getting the fucking weather</Text>
          {error? <Text style={styles.errorText}>{error}</Text>: null}
         </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1'    
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent',
    marginBottom: 40
  },
  loading:{
    flex: 1,
    backgroundColor: '#fdf6aa',
    justifyContent: 'flex-end',
    paddingLeft:25
  },
  loadingText:{
    fontSize: 30,
    marginBottom: 100
  }
});
