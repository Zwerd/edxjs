import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import {vibrate} from './utils'

let seconds = ''

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes:'25',
      seconds:'00',
      startTimer:true,
      button:'Stop',
      status:'WORK TIME',
      workmins:'25',
      worksecs:'00',
      breakmins:'05',
      breaksecs:'00',
    };
  }

componentDidMount(){
  this.startInterval = setInterval(this.timer,1000)
}

timer = () => {
  console.log('in timer',this.state.minutes)
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
    minutes: minutes,
  })
  if(minutes == '00' && seconds =='00'){
    vibrate()
    clearInterval(this.startInterval)
    console.log(this.state.minutes)
    if(this.state.status == 'WORK TIME'){
      this.setState({
        status:'BREAK TIME',
        minutes:this.state.breakmins,
        seconds:this.state.breaksecs,
      })
      console.log(this.state.minutes)
      this.startInterval = setInterval(this.timer,1000)
    }else{
      this.setState({
        status:'WORK TIME',
        minutes:this.state.workmins,
        seconds:this.state.worksecs,
      })
      this.startInterval = setInterval(this.timer,1000)
    }
  }
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
    minutes:'25',
    seconds:'00',
    workmins:'25',
    worksecs:'00',
    breakmins:'05',
    breaksecs:'00',
    status:'WORK TIME',
    startTimer:true
  })
  clearInterval(this.startInterval)
  this.startInterval = setInterval(this.timer,1000)
}

set = () => {
  this.setState({
    minutes:this.state.workmins,
    seconds:this.state.worksecs
  })
}
dualDigit(number){
  if(number.length==1){
    return '0'+number
  }
}

    render() {
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
              onChangeText={(text)=>{
                this.setState({workmins:this.dualDigit(text)});
              }}
             />
            <Text>Secs:</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid='transparent'
              placeholder='00'
              onChangeText={(text)=>this.setState({worksecs:this.dualDigit(text)})}
             />
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Break Time: </Text>
            <Text>Mins:</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid='transparent'
              placeholder='05'
              onChangeText={(text)=>this.setState({breakmins:this.dualDigit(text)})}
             />
            <Text>Secs:</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid='transparent'
              placeholder='00'
              onChangeText={(text)=>this.setState({breaksecs:this.dualDigit(text)})}
             />
          </View>
          <TouchableOpacity style={styles.button} onPress={this.set}>
            <Text style={styles.text}>Setup the program</Text>
          </TouchableOpacity>
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
    flex:1,
    flexDirection:'row',
    alignItems:'center',
  },
  text:{
    fontWeight: 'bold',
    fontSize:20,
  },
  textInput:{
    margin:2,
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
  },

});
