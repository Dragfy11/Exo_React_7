import './App.css';

import React, { Component } from 'react'
import { Article } from './components/Article';

export class App extends Component {

  state = {
    nom: "",
    prixNom: "130"
  }

  render() {
    return (
      <div>
       <Article nom="Colier" prixNom={99}/>
       <Article nom="Lunette" prixNom={this.state.prixNom}/>
       <Article nom="Veste" prixNom={65}/>
      </div>
    )
  }
}

export default App

