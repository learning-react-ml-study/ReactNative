import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class App extends Component {
  state = {
    isLoaded: false
  }

  render() {
    const {isLoaded} = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? null : 
        <View style={styles.loading}>
          <ActivityIndicator />
          <Text style={styles.loadingText}>앱을 보여 달란 말이야.</Text>
        </View>}
      </View>
    );
  }
}

// 마진이나 패딩을 쇼트핸드 표기법은 안 된다.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    backgroundColor: '#FDF6aa',
    justifyContent: 'flex-end',
    flex:1,
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 30,
    marginBottom: 100
  }
});

// 다음 주까지 날씨 앱 끝내는 걸로