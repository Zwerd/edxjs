import React from 'react'
import {Button, StyleSheet, TextInput, View, TouchableOpacity, Text} from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: 'deepskyblue'
  }
})

export default class AddContactForm extends React.Component {
  state = {
    key: this.props.key,
    name: '',
    phone: '',
    isFormValid: false,
  }

  handleNameChange = name => {
    this.setState({name})
  }

  handlePhoneChange = phone => {
    this.setState({phone})
  }

  handelSubmit = () => {
    let itemsLengs = this.props.
    this.props.onSubmit(this.state)
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
         >
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
