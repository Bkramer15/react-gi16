// App.js
import React, { Component } from 'react';
import BasicInfo from './BasicInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: 'Lebron James',
          number: '946-475-8947',
          dob: 'January 11, 1980'
        },
        {
          name: 'Birhanu Kramer',
          number: '982-634-3110',
          dob: 'February 11, 2004'
        },
        {
          name: 'Jon smith',
          number: '282-634-3190',
          dob: 'May 22, 1973'
        },
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

export default App;
