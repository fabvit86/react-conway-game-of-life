//RULES:
/*
Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overpopulation.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/

import React, { Component } from 'react'
import './App.css';
import Grid from './Grid'

class App extends Component {
  constructor () {
    super()
    this.state = {
      gameId: 1
    }
    // default values:
    this.rows = 40
    this.columns = 70
    this.activeGridButton = 'mediumGridButton'
  }
  
  // change the gameId (key of <Grid/>) to render a new game:
  newGame () {
    this.setState({ gameId: this.state.gameId + 1 })
  }
  
  //change the game grid size and start a new game:
  changeGridSize (sizeButtonId) {
    switch (sizeButtonId) {
      case 'smallGridButton':
        this.rows = 20
        this.columns = 50    
      break
      case 'mediumGridButton':
        this.rows = 40
        this.columns = 70    
      break
      case 'largeGridButton':
        this.rows = 60
        this.columns = 90    
      break
      default:
        break
    }
    this.activeGridButton = sizeButtonId
    this.newGame()
  }
  
  render () {
    return (
      <div>
        <Grid
          key={this.state.gameId}
          newGame={this.newGame.bind(this)}
          changeGridSize={this.changeGridSize.bind(this)}
          rows={this.rows}
          columns={this.columns}
          activeGridButton={this.activeGridButton}
          slowSpeed={700}
          mediumSpeed={400}
          fastSpeed={100}
        />
      </div>
    )
  }
}

export default App;
