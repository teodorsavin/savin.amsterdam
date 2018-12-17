import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
        <div className="about">
            <h2>Contact</h2>
                <form className="contact" autoComplete="off">
                    <label>Name</label>
                    <input
                        name="name"
                        type="text"
                        autoComplete="off" />
                    <label>Email</label>
                    <input
                        name="email"
                        type="email"
                        autoComplete="off" />
                    <label>Message</label>
                    <textarea name="message">
                    </textarea>
                    <input type="submit" value="Send" />
                </form>
        </div>
    );
  }
}

export default Contact;
