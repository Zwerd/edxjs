import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes:25,
      seconds:0,

    };
  }

componentDidMount(){
  setInterval(this.timer,1000)
}

componentWillUpdate(){
  if (this.state.seconds == 0){
    this.setState(prevState => ({
      seconds: 59,
      minutes: prevState.minutes - 1
    }))
  }
}

timer = () => {
  this.setState(prevState => ({
    seconds: prevState.seconds - 1
  }))
}


    render() {
    console.log("check")
    return (
      <View style={styles.container}>
          <Text style={styles.title}>WORK TIMER</Text>
          <Text style={styles.timer}>
              {this.state.minutes}:{this.state.seconds}
          </Text>
          <View style={styles.row}>
            <Button title="Pause"/>
            <Button title="Reset"/>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Work Time: </Text>
            <Text>Mins:</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid='transparent'
              placeholder='25'
              onChangeText={(text)=>this.setState({timer:{minutes:props.text}})}
             />
            <Text>Secs:</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid='transparent'
              placeholder='0'
              onChangeText={(text)=>this.setState({timer:{minutes:props.text}})}
             />
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Break Time: </Text>
            <Text>Mins:</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid='transparent'
              placeholder='5'
              onChangeText={(text)=>this.setState({timer:{minutes:props.text}})}
             />
            <Text>Secs:</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid='transparent'
              placeholder='0'
              onChangeText={(text)=>this.setState({timer:{minutes:props.text}})}
             />
          </View>
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
  title:{
    fontSize: 50,
    fontWeight: 'bold',
  },
  timer:{
    fontSize: 70,
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    margin: 6,
  },
  text:{
    fontWeight: 'bold',
    fontSize:20,
  },
  textInput:{
    height:20,
    width:30,
    borderColor:'black',
    borderWidth:1,
    textAlign:'center'
  },
  flex:{
    flex:1,
    flexDirection:'row'
  }
});
