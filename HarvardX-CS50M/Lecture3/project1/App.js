import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

let seconds = ''

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes:25,
      seconds:59,
      startTimer:true

    };
  }

componentDidMount(){
  this.startInterval = setInterval(this.timer,1000)
}

timer = () => {
  let seconds = String(this.state.seconds - 1);
  let minutes = this.state.minutes;
  if(seconds.length == 1){
    seconds = '0'+seconds
  }
  if(seconds == '-1'){
    seconds = 59;
    minutes = String(this.state.minutes - 1);
  }
  if(minutes.length==1){
    minutes = '0'+minutes
  }
  this.setState({
    seconds: seconds,
    minutes: minutes
  })
}

stopTimer = () => {
  if(this.state.startTimer == true){
    clearInterval(this.startInterval)
    this.setState({startTimer:false})
  }else{
    this.startInterval = setInterval(this.timer,1000)
    this.setState({startTimer:true})
}
}

    render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>WORK TIMER</Text>
          <Text style={styles.timer}>
              {this.state.minutes}:{this.state.seconds}
          </Text>
          <View style={styles.row}>
            <Button title="Pause" onPress={this.stopTimer}/>
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
