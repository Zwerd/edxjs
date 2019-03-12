import React from 'react'
import {Button, StyleSheet, TextInput, View, TouchableOpacity, Text} from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
  button:{
    alignItems: 'center',
    padding: 1
  },
  text:{
    fontSize: 20,
  },
  textValid:{
    color: 'deepskyblue',
  },
  textInvalid:{
    color: 'gray',
  }
})

export default class AddContactForm extends React.Component {
  state = {
    key:this.props.len,
    name: '',
    phone: '',
    isFormValid: false
  }

  componentDidUpdate(prevProps,prevState){
    if(this.state.name !== prevState.name || this.state.phone !== prevState.phone){
      this.validateForm()
    }
  }

  getHandler = key => val => {
    this.setState({[key]: val})
  }

  handleNameChange = this.getHandler('name') // val => { this.setState({name: val}) }
  handlePhoneChange = this.getHandler('phone')


  handelSubmit = () => {
    if(+this.state.phone >= 0 && this.state.phone.length ===10 && this.state.name.length >= 2){
    this.props.onSubmit(this.state)
    }
  }

  validateForm = () => {
    console.log(this.state)
    const names = this.state.name.split(' ')
    if(+this.state.phone >= 0
      && this.state.phone.length ===10
      && this.state.name.length >= 2
      && names[0] && names[1]){
      this.setState({isFormValid:true})
    }else{
      this.setState({isFormValid:false})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleNameChange}
          placeholder="Name"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handlePhoneChange}
          placeholder="Phone"
        />
        <TouchableOpacity
         style={styles.button}
         onPress={this.handelSubmit}
         disabled={!this.state.isFormValid}
         >
          <Text
            style={[styles.text,this.state.isFormValid ? styles.textValid : styles.textInvalid]}>
              Submit
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
