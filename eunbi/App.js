import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import Weather from "./Weather";

const API_KEY = "8cb78a535c98c7d5e4d245df73ab2ac2";

export default class App extends Component {
  state = {
    isLoaded : false,
    error:null
  }
  componetDidmount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          errror:error
        })
      }
    )
  }

  _getWeather={lat,lon}=>{
    fetch("http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon} & APPID=${API_KEY}")
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        temperature:json.main.temp,
        name:json.weather[0].main,
        isLoaded:true
      })
    })
  }

  render() {
    const {isLoaded} = this.state
    return (
      <View style={styles.container}>
      <StatusBar hidden="true"/>
        {isLoaded? (<Weather/>) : (<View style={styles.loading}>
          <Text style={styles.loadingText}>getting the weather</Text>
          {error? <Text>{error}</Text> : null}
        </View>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    flex:1,
    backgroundColor:"#fdf6aa",
    justifyContent:"flex-end",
    paddingLeft:25
  },
  loadingText: {
    fontSize: 30,
    marginBottom:100
  }
});
