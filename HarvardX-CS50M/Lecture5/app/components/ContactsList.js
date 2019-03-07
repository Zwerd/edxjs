import React from 'react'
import {SectionList, Text} from 'react-native'
import PropTypes from 'prop-types'
import Row from './Row'


const renderItem = ({item}) => <Row {...item}/>

const renderSectionHeader = (obj) => <Text>{obj.section.title}</Text>

const SectionListContacts = props => {
  const contactsByLetter = props.contacts.reduce((obj, contact) => {
    console.log('this is obj and cont:', obj, contact)
    const firstLetter = contact.name[0].toUpperCase()
    console.log('obj firstletter:',[...(obj[firstLetter]) || [],obj,firstLetter])
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    }
  }, {})

  const sections = Object.keys(contactsByLetter).sort().map(letter => ({
    data: contactsByLetter[letter],
    title: letter,
  }))

  return (
    <SectionList
      sections={sections}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      />
    )
}

SectionListContacts.propTypes = {
  contacts: PropTypes.array,
}


export default SectionListContacts
