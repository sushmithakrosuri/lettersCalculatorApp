// Write your code here.
import React from 'react'
import './index.css'

class LettersCalculator extends React.Component {
  state = {count: 0}

  countCharacters = event => {
    const word = event.target.value
    this.setState({count: word.length})
    console.log(event.target.value)
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <div className="container">
          <div className="card">
            <h1>Calculate the Letters you enter</h1>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="wordInput" className="inputText">
                Enter the phrase
              </label>
              <br />
              <input
                id="wordInput"
                onChange={this.countCharacters}
                placeholder="Enter the phrase"
                className="input"
                type="text"
              />
            </form>
            <div className="lettersCard">
              <p>No.of letters: {count}</p>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
