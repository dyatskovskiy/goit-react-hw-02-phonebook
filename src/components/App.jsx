import { Component } from 'react';
import { AppLayout } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Contact } from 'components/Contact/Contact';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    const hasNewContactInContacts = this.state.contacts.find(
      contact => contact.name === newContact.name
    );

    hasNewContactInContacts
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, newContact],
          };
        });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contactId),
      };
    });
  };

  updateFilter = filterString => {
    this.setState(() => {
      return {
        filter: filterString,
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(item => {
      return item.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
      <AppLayout>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />

        {contacts.length > 0 && (
          <ContactList onUpdateFilter={this.updateFilter}>
            {filteredContacts.map(contact => (
              <Contact
                id={contact.id}
                key={contact.id}
                name={contact.name}
                number={contact.number}
                onDelete={this.deleteContact}
              />
            ))}
          </ContactList>
        )}
      </AppLayout>
    );
  }
}
