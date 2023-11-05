import { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Contact } from 'components/Contact/Contact';

export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  render() {
    const { name, contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm name={name} onAddContact={this.addContact} />

        {contacts.length > 0 && (
          <ContactList>
            {contacts.map(contact => (
              <Contact
                key={contact.id}
                name={contact.name}
                number={contact.number}
              />
            ))}
          </ContactList>
        )}
      </div>
    );
  }
}
