import React, { Component } from "react"
import "./CreditCard.css"

function fillNormalizedThru(str) {
  let result = ["•", "•", "/", "•", "•"]
  let i = 0
  for (let char of str) {
    if (i === 2) i++
    result[i] = char
    i++
  }
  return result.join("")
}

function fillNormalized(str) {
  let result = str
  while (result.length < 16) {
    result += "•"
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

const logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png"

const CreditCard = props => (
  <div className="credit-card">
    <h1 className="company-name">Company name</h1>
    <img
      className="chip-image"
      src="https://www.thebeneficial.com/portals/beneficialbankwebsite/images/chip.png"
    />
    <div className="card-info">
      <div className="card-info-text">
        <h2 className="credit-number">
          {renderForm(fillNormalized(props.cardNumber))}
        </h2>
        <h2 className="valid-thru">{fillNormalizedThru(props.validThru)}</h2>
        <h2 className="card-holder">{props.cardHolderName}</h2>
      </div>
      <div className="card-info-logo">
        <img src={logo} />
      </div>
    </div>
  </div>
)

export default CreditCard
