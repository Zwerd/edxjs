import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import {vibrate} from './utils'

let seconds = ''

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes:'00',
      seconds:'10',
      startTimer:true,
      button:'Stop',
      status:'TIME TO WORK',
      work:{mins:'25',secs:'00',},
      break:{mins:'05',secs:'00'}
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
  if(minutes == '00' && seconds =='00'){
    vibrate()
    clearInterval(this.startInterval)
    this.setState({startTimer:'restart',button:'Start Again'})
  }
  if(this.state.minutes == this.state.work.mins && this.state.seconds == this.state.work.secs){
    this.setState({status:'TIME TO WORK',})
  }
  if(this.state.minutes == this.state.break.mins && this.state.seconds == this.state.break.secs){
    this.setState({status:'BREAKING TIME',})
  }
  this.setState({
    seconds: seconds,
    minutes: minutes
  })
}

stopTimer = () => {
  if(this.state.startTimer == true){
    clearInterval(this.startInterval)
    this.setState({startTimer:false,button:'Start'})
  }else if(this.state.startTimer == false){
    this.startInterval = setInterval(this.timer,1000)
    this.setState({startTimer:true,button:'Stop'})
  }else{
    this.setState({
      seconds: '00',
      minutes: '25'
    })
    this.startInterval = setInterval(this.timer,1000)
    this.setState({startTimer:true,button:'Stop'})
  }
}

resetTimer = () => {
  this.setState({
    seconds:'00',
    minutes:'25',
    startTimer:true
  })
  clearInterval(this.startInterval)
  this.startInterval = setInterval(this.timer,1000)
}

    render() {
      console.log(this.state.work.mins)
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>{this.state.status}</Text>
          <Text style={styles.timer}>
              {this.state.minutes}:{this.state.seconds}
          </Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={this.stopTimer}>
              <Text style={styles.text}>{this.state.button}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.resetTimer}>
              <Text style={styles.text}>Reset</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Work Time: </Text>
            <Text>Mins:</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid='transparent'
              placeholder='25'
              onChangeText={(text)=>this.setState({work:{mins:text}})}
             />
            <Text>Secs:</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid='transparent'
              placeholder='00'
              onChangeText={(text)=>this.setState({work:{sec:text}})}
             />
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Break Time: </Text>
            <Text>Mins:</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid='transparent'
              placeholder='05'
              onChangeText={(text)=>this.setState({break:{mins:text}})}
             />
            <Text>Secs:</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid='transparent'
              placeholder='00'
              onChangeText={(text)=>this.setState({break:{secs:text}})}
             />
          </View>
        </View>
      </ScrollView>
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
    fontSize: 100,
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
    padding:5,
    fontSize:20,
    borderColor:'black',
    borderWidth:1,
    textAlign:'center'
  },
  flex:{
    flex:1,
    flexDirection:'row'
  },
  button:{
    margin:3,
    padding:20,
    backgroundColor: 'lightblue',
    borderWidth:2,
    borderRadius:10,
  }
});
