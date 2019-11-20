import React, {Component} from 'react';
import Banner from './Banner';
import '../App.css';
import ContactForm from './ContactForm';


// export default function ContactInfo({children, title, subtitle}) {
//     // return (
//     //     <div className="banner">
//     //         <h1>{title}</h1>
//     //         <div></div>
//     //         <p>{subtitle}</p>
//     //         {children}
//     //     </div>
//     // );
//     return (
//     <Banner 
//         title = "Contact Info" 
//         subtitle="Number: (02)2713-2378 ">hello</Banner>
//     )
// }


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