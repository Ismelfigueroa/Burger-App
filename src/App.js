import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
state = {
  persons: [
    { name: 'Ismel', age: 27},
    { name: 'Karime', age: 33},
    { name: 'Teddy', age: 3},
  ]
}

  render() {
    return (
<div className="App">
  <h1>Ismel</h1>
  <p>This is my family</p>
  <button>Switch Name</button>
  <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> It's me</Person>
  <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>She is my girfriend</Person>
  <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >He is our dog </Person>
</div>
    );
  } 
}
export default App;
