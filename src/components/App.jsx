import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  updateName = newName => {
    this.setState(() => {
      return {
        name: newName,
      };
    });
  };

  addContact = () => {
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { name: this.state.name, id: nanoid() },
        ],
        name: '',
      };
    });
  };

  render() {
    const { name } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={this.state.name}
          onUpdateName={this.updateName}
          onAddContact={this.addContact}
        />

        <h2>Contacts</h2>
      </div>
    );
  }
}
