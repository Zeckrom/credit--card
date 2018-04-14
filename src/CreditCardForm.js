import React from "react"
import "./CreditCardForm.css"

function renderThru(str) {
  let result = ""
  for (let char of str) {
    if (result.length < 5) {
      if (result.length === 2) {
        result += "/"
      }
      result += char
    }
  }
  return result
}

function renderForm(str) {
  let result = ""
  for (let char of str) {
    if (result.length === 4 || result.length === 9 || result.length === 14) {
      result += " "
    }
    result += char
  }
  return result
}

function normalize(str, n) {
  let result = ""
  for (let char of str) {
    if (result.length < n) {
      if (char >= "0" && char <= "9") {
        result += char
      }
    }
  }
  return result
}

const CreditCardForm = props => (
  <div className="credit-card-form">
    <div className="credit-card-form__row">
      <input
        className="credit-card-form__input"
        type="text"
        onChange={event => {
          let normalized = normalize(event.target.value, 16)
          props.onCardNumberChange(normalized)
          event.target.value = renderForm(normalized)
        }}
        placeholder="Card Number"
      />
    </div>
    <div className="credit-card-form__row">
      <input
        maxlength="15"
        className="credit-card-form__input"
        type="text"
        onChange={event => {
          props.onCardHolderChange(event.target.value.toUpperCase())
        }}
        placeholder="Name"
      />
    </div>
    <div className="credit-card-form__row">
      <input
        className="credit-card-form__input credit-card-form__input--2-thirds"
        type="text"
        onChange={event => {
          let normalized = normalize(event.target.value, 4)
          props.onValidChange(normalized)
          event.target.value = renderThru(normalized)
        }}
        placeholder="Valid Thru"
      />
    </div>
  </div>
)

export default CreditCardForm
