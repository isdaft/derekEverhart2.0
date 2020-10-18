import React from 'react'

class ContactForm extends React.Component {

  render() {
    const formStyle = {
      textAlign: 'left',
      width: '50vw'
    }
    const buttonsStyle = {
      margin: '1rem',
      textAlign: 'center',
    }
    return (
    	<div className="contact-page">
    	<h1>Contact Me</h1>
      <form style={formStyle} className="ui form" method="POST" data-netlify="true">
        <div className="field">
          <label>Full name</label>
          <input type="text" name="fullname"/>
        </div>
        <div className="field">
          <label>Email</label>
          <input type="email" name="email"/>
        </div>
        <div className="field">
          <label>Message</label>
          <textarea name="message" rows="5"></textarea>
        </div>
        
        <button type="submit"  className="button ui">Send</button>
            
      </form>
      </div>
    );
  }
}

export default ContactForm
