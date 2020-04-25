import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from './components/Menu'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      response: ''
    };
  }

  componentDidMount() {
    var self = this;
    fetch("example.json")
    .then((response) => {
      if (response.ok) {
        return response.text().then(function(json) {
          // process your JSON further
          console.log('here');
          self.setState({response: json});
          console.log(self.state);
        });
      } else {
        console.log("Oops, we haven't got JSON!");
        self.setState({response: "Oops, we haven't got JSON!"});
        console.log(self.state);
      }
    });
  }

  render() {
    return (
      <MuiThemeProvider>
      <div>
        <Menu />
        <div id="main">
          <Hello name={this.state.name} />
          <p>
            Start editing to see some magic happen :)
          </p>
          <pre>
            {this.state.response}
          </pre>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
