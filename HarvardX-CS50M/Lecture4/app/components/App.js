import React from 'react';
import {SectionList, Button, TouchableOpacity, FlatList, ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';

import contacts, {compareNames} from './contacts'
import ContactsList from './ContactsList'
import AddContactForm from './AddContactForm'

export default class App extends React.Component {
  state = {
    showContacts: false,
    showAddContacts: false,
    contacts: contacts,
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  toggleAddContacts = () => {
    this.setState(prevState => ({showAddContacts: !prevState.showAddContacts}))
  }

  sort = () => {
    console.log('sorting', this.state.contacts.sort(compareNames))
    this.setState(prevState => ({
      contacts:[...prevState.contacts].sort(compareNames),
    }))
  }

addContact = () => {

}

  render() {
    if(this.state.showAddContacts){<AddContactForm />}
      return(
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={this.toggleContacts}>
           <Text style={styles.text}>toggle contacts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.toggleAddContacts}>
           <Text style={styles.text}>Add Contact</Text>
          </TouchableOpacity>
          {this.state.showContacts && <ContactsList
                contacts={this.state.contacts}
                keyExtractor={(item) => item.toString()}
            />
          }
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button:{
    alignItems: 'center',
    padding: 1
  },
  text:{
    fontSize: 20,
    color: 'deepskyblue'
  }
});
