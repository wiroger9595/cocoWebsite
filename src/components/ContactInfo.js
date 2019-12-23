import React, {Component} from 'react';
import Banner from './Banner';
import '../App.css';
import ContactForm from './ContactForm';





class ContactInfo extends Component {
    render() {
      return (
        <div className="App">
            <header className="App-header">
              <img className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <ContactForm />
        </div>
      );
    }
  }
  
  export default ContactInfo;