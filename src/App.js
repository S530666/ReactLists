import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/ValidationComponent.js'
import Char from './CharComponent/CharComponent.js'

class App extends Component {
  state = {
    len : 0,
    words : ''
  }
  changeListener = (event) => {
      // const words = [...event.target.value.split('')];
      this.setState({ len : event.target.value.length, words: event.target.value  })
      
  }

  deleteChar = (index) => {
      const w = this.state.words.split('').slice();
      w.splice(index,1);

      this.setState({  words: w.join('')  })
  }
  render() {
    let sentence = null;

    if(this.state.len>0) {
      sentence = (
       
        this.state.words.split('').map((word,index) => {
          return <Char 
                    click = { () => this.deleteChar(index)}
                    name = {word}
                     />
        })
       
      );
    }

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input onChange = {this.changeListener} />
        <Validation length = {this.state.len}/>
        {sentence}
      </div>
    );
  }
}

export default App;
