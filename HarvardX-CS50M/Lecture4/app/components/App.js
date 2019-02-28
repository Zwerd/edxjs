import React from 'react';
import { Button, TouchableOpacity, FlatList, ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';

import contacts, {compareNames} from './contacts'
import Row from './Row'

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: contacts,
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  sort = () => {
    console.log('sorting', this.state.contacts)
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames),
    }))
    console.log('aftersorting', this.state.contacts)
  }

  renderItem = ({item}) => <Row {...item}/>

  render() {
      return(
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={this.toggleContacts}>
           <Text style={styles.text}>toggle contacts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.sort}>
           <Text style={styles.text}>Sort</Text>
          </TouchableOpacity>
          {this.state.showContacts && (
            <FlatList
                renderItem={this.renderItem}
                data={this.state.contacts}
                keyExtractor={(item) => item.toString()}
            />
          )}
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
