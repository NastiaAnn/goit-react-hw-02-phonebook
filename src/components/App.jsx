import React, { Component } from 'react';
import { ContactList } from './ContactList';
import { Form } from './Form';

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = contact => {
    this.state.contacts.push(contact);
    console.log(this.state.contacts);
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        {/* <Filter  /> */}
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
