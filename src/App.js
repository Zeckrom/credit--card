import React, { Component } from "react"
import CreditCard from "./CreditCard"
import CreditCardForm from "./CreditCardForm"
import "./App.css"

const logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png"

class App extends Component {
  state = {
    cardNumber: "",
    cardHolderName: "YOUR NAME HERE",
    validThru: ""
  }
  constructor(props) {
    super(props)
  }

  setCardNumber = newCardNumber => {
    this.setState({
      cardNumber: newCardNumber
    })
  }

  setCardHolderName = newCardHolderName => {
    this.setState({
      cardHolderName: newCardHolderName
    })
  }

  setValidThru = newValidThru => {
    this.setState({
      validThru: newValidThru
    })
  }

  render() {
    let { cardNumber, cardHolderName, validThru } = this.state
    let { setCardNumber, setCardHolderName, setValidThru } = this

    return (
      <div className="app-container">
        <div className="app-content-item">
          <CreditCard
            cardNumber={cardNumber}
            cardHolderName={cardHolderName}
            validThru={validThru}
          />
        </div>
        <div className="app-content-item">
          <CreditCardForm
            onCardNumberChange={this.setCardNumber}
            onCardHolderChange={this.setCardHolderName}
            onValidChange={setValidThru}
          />
        </div>
      </div>
    )
  }
}

export default App
