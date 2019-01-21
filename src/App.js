import React, { Component } from 'react';
import './App.css';
import parser from 'xml2json';


var keys = {
  "goodreads": // <KEY> //
}

const proxyurl = "https://cors-anywhere.herokuapp.com/";

class App extends Component {
  searchGoodreads = (query) => {
    fetch(`${proxyurl}https://www.goodreads.com/search?q=${query}&key=Anz5YTfUR2W75yBAFYP3w`,
    {
      method: "GET",
      mode: "cors",
      headers: new Headers({
        'Access-Control-Allow-Origin':'*'
      })
    })
      .then(response => response.text())
      .then(XML => parser.toJson(parser))
      .then(resp => console.log(resp))
      .catch(function(err) {
        console.error(err);
      });
  }

  render() {
    var result = this.searchGoodreads("Help");

    return (
      <div className="App">
        {}
      </div>
    );
  }
}

export default App;
